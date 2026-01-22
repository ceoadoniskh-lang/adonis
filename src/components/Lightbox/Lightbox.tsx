import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(100%);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const LightboxOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const LightboxContent = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
  }
`;

const NavigationButton = styled.button<{ $position: "left" | "right" }>`
  position: fixed;
  top: 50%;
  ${(props) => (props.$position === "left" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    &:hover {
      transform: translateY(-50%);
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 22px;
    ${(props) => (props.$position === "left" ? "left: 10px;" : "right: 10px;")}
  }
`;

const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  display: block;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 70vh;
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 40px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 20;
`;

const ProductName = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailsButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  z-index: 20;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    padding: 6px 14px;
    font-size: 0.8rem;
  }
`;

const DetailsPanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 20px 20px 0 0;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 1200;
  transform: ${(props) => (props.$isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
`;

const DetailsPanelHandle = styled.div`
  width: 40px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  margin: 12px auto 0;
`;

const DetailsPanelHeader = styled.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;

const DetailsPanelTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  color: #000;
`;

const CloseDetailsButton = styled.button`
  background: #f5f5f5;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

const DetailsPanelContent = styled.div`
  padding: 20px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const InfoItem = styled.div`
  background: #f8f8f8;
  padding: 12px 16px;
  border-radius: 12px;
`;

const InfoLabel = styled.div`
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
`;

const DescriptionSection = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
`;

const DescriptionLabel = styled.div`
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  margin: 0;
  color: #444;
  font-size: 0.9rem;
  line-height: 1.7;
`;

const Overlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0 && onNavigate) {
      onNavigate(currentIndex - 1);
      setIsDetailsOpen(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < allItems.length - 1 && onNavigate) {
      onNavigate(currentIndex + 1);
      setIsDetailsOpen(false);
    }
  };

  // Reset details panel when item changes
  useEffect(() => {
    setIsDetailsOpen(false);
  }, [item?.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsDetailsOpen((prev) => {
          if (prev) return false;
          onClose();
          return prev;
        });
      } else if (e.key === "ArrowLeft" && currentIndex > 0 && onNavigate) {
        onNavigate(currentIndex - 1);
        setIsDetailsOpen(false);
      } else if (
        e.key === "ArrowRight" &&
        currentIndex < allItems.length - 1 &&
        onNavigate
      ) {
        onNavigate(currentIndex + 1);
        setIsDetailsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
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

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < allItems.length - 1;

  const hasDetails = brand || season || material || silhouette || description;

  return (
    <LightboxOverlay $isOpen={isOpen}>
      <ClickableBackground onClick={onClose} />
      <LightboxContent>
        <CloseButton onClick={onClose}>×</CloseButton>

        {allItems.length > 1 && (
          <>
            <NavigationButton
              $position="left"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              aria-label={t("catalog.previousItem", "Попередній товар")}
            >
              ‹
            </NavigationButton>
            <NavigationButton
              $position="right"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label={t("catalog.nextItem", "Наступний товар")}
            >
              ›
            </NavigationButton>
          </>
        )}

        <LightboxImage
          src={encodeURI(item.imagePath)}
          alt={translatedAltText}
        />

        <BottomBar onClick={(e) => e.stopPropagation()}>
          <ProductName>{translatedName}</ProductName>
          {hasDetails && (
            <DetailsButton onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsDetailsOpen(true);
            }}>
              {t("catalog.details", "Деталі")}
              <span>↑</span>
            </DetailsButton>
          )}
        </BottomBar>
      </LightboxContent>

      <Overlay $isVisible={isDetailsOpen} onClick={(e) => {
        e.stopPropagation();
        setIsDetailsOpen(false);
      }} />
      
      <DetailsPanel $isOpen={isDetailsOpen} onClick={(e) => e.stopPropagation()}>
        <DetailsPanelHandle />
        <DetailsPanelHeader>
          <DetailsPanelTitle>{translatedName}</DetailsPanelTitle>
          <CloseDetailsButton onClick={() => setIsDetailsOpen(false)}>
            ×
          </CloseDetailsButton>
        </DetailsPanelHeader>
        <DetailsPanelContent>
          <InfoGrid>
            {brand && (
              <InfoItem>
                <InfoLabel>{t("catalog.brand", "Бренд")}</InfoLabel>
                <InfoValue>{brand}</InfoValue>
              </InfoItem>
            )}
            {season && (
              <InfoItem>
                <InfoLabel>{t("catalog.season", "Сезон")}</InfoLabel>
                <InfoValue>{season}</InfoValue>
              </InfoItem>
            )}
            {material && (
              <InfoItem>
                <InfoLabel>{t("catalog.material", "Матеріал")}</InfoLabel>
                <InfoValue>{material}</InfoValue>
              </InfoItem>
            )}
            {silhouette && (
              <InfoItem>
                <InfoLabel>{t("catalog.silhouette", "Силует")}</InfoLabel>
                <InfoValue>{silhouette}</InfoValue>
              </InfoItem>
            )}
          </InfoGrid>

          {description && (
            <DescriptionSection>
              <DescriptionLabel>{t("catalog.description", "Опис")}</DescriptionLabel>
              <DescriptionText>{description}</DescriptionText>
            </DescriptionSection>
          )}
        </DetailsPanelContent>
      </DetailsPanel>
    </LightboxOverlay>
  );
};

export default Lightbox;
