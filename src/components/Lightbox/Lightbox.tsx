import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CatalogItem } from "../../data/catalogItems";

interface LightboxProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
  allItems?: CatalogItem[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

interface ParsedUserText {
  model: string;
  brand: string;
  season: string;
  material: string;
  silhouette: string;
  description: string;
}

const LightboxOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-width: 900px;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  overflow-y: auto;
`;

const LightboxImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4px;
  z-index: 10;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const NavigationButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 32px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s ease;
  padding: 0;
  margin: 0;
  line-height: 0;

  & > span {
    display: inline-block;
    line-height: 1;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    transform: translateY(-4px);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 26px;
    ${(props) => (props.position === "left" ? "left: 10px;" : "right: 10px;")}
  }
`;

const LightboxImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 50vh;
  object-fit: contain;
  display: block;
  background: #f5f5f5;
  flex-shrink: 0;
`;

const LightboxText = styled.div`
  padding: 30px;
  background: white;
  color: #333;
  line-height: 1.5;
  font-size: 0.95rem;
  max-width: 900px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 0.9rem;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.6rem;
  margin: 0 0 20px 0;
  color: #000;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 20px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const InfoRow = styled.div`
  font-size: 0.85rem;
  color: #333;
  line-height: 1.5;

  strong {
    font-weight: 600;
    color: #000;
  }
`;

const DescriptionSection = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
`;

const DescriptionText = styled.p<{ isExpanded: boolean }>`
  margin: 0;
  color: #555;
  font-size: 0.85rem;
  line-height: 1.6;
  display: ${(props) => (props.isExpanded ? "block" : "-webkit-box")};
  -webkit-line-clamp: ${(props) => (props.isExpanded ? "none" : "3")};
  -webkit-box-orient: vertical;
  overflow: ${(props) => (props.isExpanded ? "visible" : "hidden")};
  text-overflow: ellipsis;
`;

const ShowMoreButton = styled.button`
  margin-top: 12px;
  background: none;
  border: none;
  color: #e60076;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #c4005f;
  }
`;

const parseUserText = (userText: string): ParsedUserText => {
  const result: ParsedUserText = {
    model: "",
    brand: "",
    season: "",
    material: "",
    silhouette: "",
    description: "",
  };

  if (!userText) return result;

  const lines = userText.split("\n");
  const firstLine = lines[0] || "";
  const modelMatch =
    firstLine.match(
      /Модель:\s*([^БрендBrand\n]+?)(?=\s*Бренд|\s*Brand|\n|$)/i
    ) ||
    firstLine.match(/Model:\s*([^БрендBrand\n]+?)(?=\s*Бренд|\s*Brand|\n|$)/i);
  result.model = modelMatch ? modelMatch[1].trim() : "";

  const brandMatch =
    firstLine.match(
      /Бренд:\s*([^СезонSeason\n]+?)(?=\s*Сезон|\s*Season|\n|$)/i
    ) ||
    firstLine.match(
      /Brand:\s*([^СезонSeason\n]+?)(?=\s*Сезон|\s*Season|\n|$)/i
    );
  result.brand = brandMatch ? brandMatch[1].trim() : "";

  const seasonMatch =
    firstLine.match(
      /Сезон:\s*([^МатеріалMaterial\n]+?)(?=\s*Матеріал|\s*Material|\n|$)/i
    ) ||
    firstLine.match(
      /Season:\s*([^МатеріалMaterial\n]+?)(?=\s*Матеріал|\s*Material|\n|$)/i
    );
  result.season = seasonMatch ? seasonMatch[1].trim() : "";

  const materialMatch =
    firstLine.match(
      /Матеріал:\s*([^СилуетSilhouette\n]+?)(?=\s*Силует|\s*Silhouette|\n|$)/i
    ) ||
    firstLine.match(
      /Material:\s*([^СилуетSilhouette\n]+?)(?=\s*Силует|\s*Silhouette|\n|$)/i
    );
  result.material = materialMatch ? materialMatch[1].trim() : "";

  const silhouetteMatch =
    firstLine.match(/Силует:\s*([^\n]+?)(?=\n|$)/i) ||
    firstLine.match(/Silhouette:\s*([^\n]+?)(?=\n|$)/i);
  result.silhouette = silhouetteMatch ? silhouetteMatch[1].trim() : "";

  if (lines.length > 1) {
    result.description = lines.slice(1).join(" ").trim();
  } else {
    const afterSilhouette = firstLine.split(/Силует:\s*[^\n]+/i);
    if (afterSilhouette.length > 1) {
      const remaining = afterSilhouette[1].trim();
      if (
        remaining &&
        remaining.length > 20 &&
        !remaining.match(
          /^(Модель|Бренд|Сезон|Матеріал|Model|Brand|Season|Material):/i
        )
      ) {
        result.description = remaining;
      }
    }

    if (!result.description) {
      const afterSilhouetteEn = firstLine.split(/Silhouette:\s*[^\n]+/i);
      if (afterSilhouetteEn.length > 1) {
        const remaining = afterSilhouetteEn[1].trim();
        if (
          remaining &&
          remaining.length > 20 &&
          !remaining.match(
            /^(Модель|Бренд|Сезон|Матеріал|Model|Brand|Season|Material):/i
          )
        ) {
          result.description = remaining;
        }
      }
    }

    if (!result.description) {
      const lastFieldMatch = firstLine.match(
        /(?:Силует|Silhouette):\s*([^\n]+)/i
      );
      if (lastFieldMatch && lastFieldMatch.index !== undefined) {
        const afterLastField = firstLine
          .substring(lastFieldMatch.index + lastFieldMatch[0].length)
          .trim();
        if (afterLastField && afterLastField.length > 20) {
          result.description = afterLastField;
        }
      }
    }
  }

  return result;
};

const Lightbox: React.FC<LightboxProps> = ({
  item,
  isOpen,
  onClose,
  allItems = [],
  currentIndex = -1,
  onNavigate,
}) => {
  const { t } = useTranslation();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0 && onNavigate) {
      onNavigate(currentIndex - 1);
      setIsDescriptionExpanded(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < allItems.length - 1 && onNavigate) {
      onNavigate(currentIndex + 1);
      setIsDescriptionExpanded(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && currentIndex > 0 && onNavigate) {
        onNavigate(currentIndex - 1);
        setIsDescriptionExpanded(false);
      } else if (
        e.key === "ArrowRight" &&
        currentIndex < allItems.length - 1 &&
        onNavigate
      ) {
        onNavigate(currentIndex + 1);
        setIsDescriptionExpanded(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setIsDescriptionExpanded(false);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, currentIndex, allItems.length, onNavigate]);

  if (!item || !isOpen) return null;

  const translatedName = t(`catalog.items.${item.id}.name`, item.name);
  const translatedAltText = t(`catalog.items.${item.id}.altText`, item.altText);
  const translatedUserText = t(
    `catalog.items.${item.id}.userText`,
    item.userText
  );

  const translatedSeason = item.season
    ? t(`catalog.items.${item.id}.season`, item.season)
    : "";
  const translatedSilhouette = item.silhouette
    ? t(`catalog.items.${item.id}.silhouette`, item.silhouette)
    : "";
  const translatedMaterial = item.material
    ? t(`catalog.items.${item.id}.material`, item.material)
    : "";

  const parsed = parseUserText(translatedUserText);

  const brand = parsed.brand || "ADONIS";
  const season = translatedSeason || parsed.season || "";
  const material = translatedMaterial || parsed.material || "";
  const silhouette = translatedSilhouette || parsed.silhouette || "";

  let description = parsed.description || "";
  if (!description && translatedUserText) {
    const lines = translatedUserText.split("\n");
    if (lines.length > 1) {
      description = lines.slice(1).join(" ").trim();
    } else {
      const afterFields = translatedUserText
        .replace(
          /(?:Модель|Model|Бренд|Brand|Сезон|Season|Матеріал|Material|Силует|Silhouette):\s*[^\n]+/gi,
          ""
        )
        .trim();
      if (afterFields && afterFields.length > 20) {
        description = afterFields;
      }
    }
  }

  const needsExpandButton = description.length > 150;

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < allItems.length - 1;

  return (
    <LightboxOverlay $isOpen={isOpen} onClick={onClose}>
      <LightboxContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <LightboxImageWrapper>
          {allItems.length > 1 && (
            <>
              <NavigationButton
                position="left"
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                aria-label={t("catalog.previousItem", "Попередній товар")}
              >
                <span>‹</span>
              </NavigationButton>
              <NavigationButton
                position="right"
                onClick={handleNext}
                disabled={!canGoNext}
                aria-label={t("catalog.nextItem", "Наступний товар")}
              >
                <span>›</span>
              </NavigationButton>
            </>
          )}

          <LightboxImage
            src={encodeURI(item.imagePath)}
            alt={translatedAltText}
            loading="lazy"
          />
        </LightboxImageWrapper>
        <LightboxText>
          <ProductTitle>{translatedName}</ProductTitle>

          <ProductInfo>
            {brand && (
              <InfoRow>
                <strong>{t("catalog.brand", "Бренд")}:</strong> {brand}
              </InfoRow>
            )}
            {season && (
              <InfoRow>
                <strong>{t("catalog.season", "Сезон")}:</strong> {season}
              </InfoRow>
            )}
            {material && (
              <InfoRow>
                <strong>{t("catalog.material", "Матеріал")}:</strong> {material}
              </InfoRow>
            )}
            {silhouette && (
              <InfoRow>
                <strong>{t("catalog.silhouette", "Силует")}:</strong>{" "}
                {silhouette}
              </InfoRow>
            )}
          </ProductInfo>

          {description && description.length > 0 && (
            <DescriptionSection>
              <DescriptionText isExpanded={isDescriptionExpanded}>
                {description}
              </DescriptionText>
              {needsExpandButton && (
                <ShowMoreButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDescriptionExpanded(!isDescriptionExpanded);
                  }}
                >
                  {isDescriptionExpanded
                    ? t("catalog.showLess", "Показати менше")
                    : t("catalog.showMore", "Показати більше")}
                </ShowMoreButton>
              )}
            </DescriptionSection>
          )}
        </LightboxText>
      </LightboxContent>
    </LightboxOverlay>
  );
};

export default Lightbox;
