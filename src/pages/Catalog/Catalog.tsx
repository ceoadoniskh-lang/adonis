import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CatalogItem, getItemsByCategories } from "../../data/catalogItems";
import { catalogCategories } from "../../data/catalogCategories";
import Lightbox from "../../components/Lightbox/Lightbox";
import PriceModal from "../../components/PriceModal/PriceModal";

const CatalogContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0;
  text-align: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.35;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

const CatalogSection = styled.section`
  padding: 40px 0;
  background: white;
`;

const CategoryFilters = styled.div`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const CategoryFiltersTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const CategoryCheckboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
`;

const FiltersButton = styled.button`
  display: none;
  width: 100%;
  padding: 15px 20px;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const FiltersModal = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  padding: 0;
  overflow: hidden;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const FiltersModalContent = styled.div`
  background: white;
  border-radius: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 10000;

  @media (min-width: 481px) {
    position: fixed;
    left: 50%;
    max-width: 500px;
    border-radius: 8px;
    height: auto;
    min-height: auto;
    max-height: 90vh;
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
  }
`;

const FiltersModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: 481px) {
    padding: 20px 30px;
  }
`;

const FiltersModalTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: #333;
  font-weight: 600;
`;

const CloseFiltersButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #333;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
  }
`;

const MobileCategoryCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;
  overflow-y: auto;
  flex: 1;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 481px) {
    padding: 0 30px;
    max-height: calc(90vh - 180px);
  }
`;

const MobileCategoryCheckbox = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: 1.5px solid ${(props) => (props.$checked ? "#FF6B9D" : "#e0e0e0")};
  background: ${(props) => (props.$checked ? "#FF6B9D" : "white")};
  color: ${(props) => (props.$checked ? "white" : "#555")};
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;

  &:hover {
    border-color: #FF6B9D;
    background: ${(props) => (props.$checked ? "#FF6B9D" : "#fff5f8")};
    color: ${(props) => (props.$checked ? "white" : "#FF6B9D")};
  }

  &:active {
    transform: scale(0.98);
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }

  span {
    position: relative;
  }
`;

const ApplyFiltersButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  background: #000;
  color: white;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid #e0e0e0;

  @media (min-width: 481px) {
    border-radius: 0 0 8px 8px;
    margin: 0;
  }

  &:hover {
    background: #333;
  }

  &:active {
    background: #000;
  }
`;

const CategoryCheckbox = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: 2px solid ${(props) => (props.$checked ? "#FF6B9D" : "#FF6B9D")};
  background: ${(props) => (props.$checked ? "#FF6B9D" : "white")};
  color: ${(props) => (props.$checked ? "white" : "#333")};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;

  &:hover {
    border-color: #FF6B9D;
    background: ${(props) => (props.$checked ? "#FF6B9D" : "#fff0f5")};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(255, 107, 157, 0.3);
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }

  span {
    position: relative;
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
`;

const ItemCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ItemImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: #f5f5f5;
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;

  ${ItemCard}:hover & {
    transform: scale(1.05);
  }
`;

const ItemInfo = styled.div`
  padding: 20px;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000;
  line-height: 1.4;
`;

const ItemDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;

  p {
    margin: 4px 0;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button<{ $active?: boolean }>`
  padding: 10px 16px;
  border: 2px solid ${(props) => (props.$active ? "#000" : "#ddd")};
  background: ${(props) => (props.$active ? "#000" : "white")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #000;
    background: ${(props) => (props.$active ? "#000" : "#f5f5f5")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SEOSection = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

const SEOTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #000;
  text-align: center;
`;

const SEOText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  max-width: 900px;
  margin: 0 auto;

  h3 {
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #000;
  }

  ul {
    margin: 15px 0;
    padding-left: 30px;

    li {
      margin: 10px 0;
    }
  }

  p {
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const ITEMS_PER_PAGE = 12;

const Catalog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxItem, setLightboxItem] = useState<CatalogItem | null>(null);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [tempSelectedCategories, setTempSelectedCategories] = useState<
    string[]
  >([]);

  const currentLanguage = i18n.language || "uk";
  const filteredItems = getItemsByCategories(
    selectedCategories.length === 0 ? ["all"] : selectedCategories
  );

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCategoryToggle = (categoryKey: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryKey)) {
        return prev.filter((key) => key !== categoryKey);
      } else {
        return [...prev, categoryKey];
      }
    });
    setCurrentPage(1);
  };

  const handleMobileCategoryToggle = (categoryKey: string) => {
    setTempSelectedCategories((prev) => {
      if (prev.includes(categoryKey)) {
        return prev.filter((key) => key !== categoryKey);
      } else {
        return [...prev, categoryKey];
      }
    });
  };

  const handleOpenFilters = () => {
    setTempSelectedCategories([...selectedCategories]);
    setIsFiltersModalOpen(true);
  };

  const handleCloseFilters = () => {
    setIsFiltersModalOpen(false);
  };

  const handleApplyFilters = () => {
    setSelectedCategories([...tempSelectedCategories]);
    setCurrentPage(1);
    setIsFiltersModalOpen(false);
  };

  const handleImageClick = (item: CatalogItem) => {
    setLightboxItem(item);
  };

  const handleLightboxNavigate = (index: number) => {
    if (filteredItems[index]) {
      setLightboxItem(filteredItems[index]);
    }
  };

  const currentLightboxIndex = lightboxItem
    ? filteredItems.findIndex((item) => item.id === lightboxItem.id)
    : -1;

  const handleContactClick = () => {
    navigate("/contacts");
  };

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    const scriptId = "dotlottie-wc-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.type = "module";
      s.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFiltersModalOpen) {
        handleCloseFilters();
      }
    };

    if (isFiltersModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isFiltersModalOpen]);

  return (
    <CatalogContainer>
      <HeroSection>
        <HeroBackground>
          {/* @ts-ignore web component */}
          <dotlottie-wc
            autoplay
            loop
            src="https://lottie.host/96e6a7d2-d251-4f16-9e58-f1ce5bf4ab90/efeNpq9ZER.lottie"
            style={{ width: "100%", height: "100%" }}
          />
        </HeroBackground>
        <Container>
          <HeroTitle>{t("catalog.title")}</HeroTitle>
          <HeroSubtitle>{t("catalog.subtitle")}</HeroSubtitle>
        </Container>
      </HeroSection>

      <CatalogSection>
        <Container>
          <FiltersButton onClick={handleOpenFilters}>
            {t("catalog.filters", "Фільтри")}{" "}
            {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </FiltersButton>

          <CategoryFilters>
            <CategoryFiltersTitle>
              {t("catalog.filterByCategory") || "Фільтр по категоріях"}
            </CategoryFiltersTitle>
            <CategoryCheckboxes>
              {catalogCategories.map((category) => {
                const isChecked = selectedCategories.includes(category.key);
                return (
                  <CategoryCheckbox key={category.key} $checked={isChecked}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCategoryToggle(category.key)}
                    />
                    <span>
                      {category.label[currentLanguage as "uk" | "en" | "ru"] ||
                        category.label.uk}
                    </span>
                  </CategoryCheckbox>
                );
              })}
            </CategoryCheckboxes>
          </CategoryFilters>

          <FiltersModal
            $isOpen={isFiltersModalOpen}
            onClick={handleCloseFilters}
          >
            <FiltersModalContent onClick={(e) => e.stopPropagation()}>
              <FiltersModalHeader>
                <FiltersModalTitle>
                  {t("catalog.filterByCategory") || "Фільтр по категоріях"}
                </FiltersModalTitle>
                <CloseFiltersButton onClick={handleCloseFilters}>
                  ×
                </CloseFiltersButton>
              </FiltersModalHeader>

              <MobileCategoryCheckboxes>
                {catalogCategories.map((category) => {
                  const isChecked = tempSelectedCategories.includes(
                    category.key
                  );
                  return (
                    <MobileCategoryCheckbox
                key={category.key}
                      $checked={isChecked}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          handleMobileCategoryToggle(category.key)
                        }
                      />
                      <span>
                        {category.label[
                          currentLanguage as "uk" | "en" | "ru"
                        ] || category.label.uk}
                      </span>
                    </MobileCategoryCheckbox>
                  );
                })}
              </MobileCategoryCheckboxes>

              <ApplyFiltersButton onClick={handleApplyFilters}>
                {t("catalog.applyFilters", "Застосувати")}
              </ApplyFiltersButton>
            </FiltersModalContent>
          </FiltersModal>

          {displayedItems.length > 0 ? (
            <>
              <ItemsGrid>
                {displayedItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    onClick={() => handleImageClick(item)}
                  >
                    <ItemImageWrapper>
                      <ItemImage
                        src={encodeURI(item.imagePath)}
                        alt={t(
                          `catalog.items.${item.id}.altText`,
                          item.altText
                        )}
                        loading="lazy"
                      />
                    </ItemImageWrapper>
                    <ItemInfo>
                      <ItemName>
                        {t(`catalog.items.${item.id}.name`, item.name)}
                      </ItemName>
                      <ItemDetails>
                        {item.season && (
                          <p>
                            {t("catalog.season", "Сезон")}:{" "}
                            {t(`catalog.items.${item.id}.season`, item.season)}
                          </p>
                        )}
                        {item.silhouette && (
                          <p>
                            {t("catalog.silhouette", "Силует")}:{" "}
                            {t(
                              `catalog.items.${item.id}.silhouette`,
                              item.silhouette
                            )}
                          </p>
                        )}
                        {item.material && (
                          <p>
                            {t("catalog.material", "Матеріал")}:{" "}
                            {t(
                              `catalog.items.${item.id}.material`,
                              item.material
                            )}
                          </p>
                        )}
                      </ItemDetails>
                    </ItemInfo>
                  </ItemCard>
                ))}
              </ItemsGrid>

              {totalPages > 1 && (
                <Pagination>
                  <PaginationButton
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    ←
                  </PaginationButton>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationButton
                        key={page}
                        $active={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationButton>
                    )
                  )}
                  <PaginationButton
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    →
                  </PaginationButton>
                </Pagination>
              )}
            </>
          ) : (
            <EmptyState>
              <h3>{t("catalog.noItems") || "Товари не знайдено"}</h3>
              <p>
                {t("catalog.noItemsDescription") ||
                  "Спробуйте змінити фільтри категорій"}
              </p>
            </EmptyState>
          )}
        </Container>
      </CatalogSection>

      <SEOSection>
        <Container>
          <SEOTitle>{t("catalog.seo.title")}</SEOTitle>
          <SEOText>
            <p>{t("catalog.seo.intro")}</p>

            {t("catalog.seo.advantagesTitle") && (
              <h3>{t("catalog.seo.advantagesTitle")}</h3>
            )}
            {t("catalog.seo.advantage1Text") && (
              <p>{t("catalog.seo.advantage1Text")}</p>
            )}
            {t("catalog.seo.advantage2Text") && (
              <p>{t("catalog.seo.advantage2Text")}</p>
            )}
            {t("catalog.seo.advantage3Text") && (
              <p>{t("catalog.seo.advantage3Text")}</p>
            )}
            {t("catalog.seo.advantage4Text") && (
              <p>{t("catalog.seo.advantage4Text")}</p>
            )}
            {t("catalog.seo.advantage5Text") && (
              <p>{t("catalog.seo.advantage5Text")}</p>
            )}

            {t("catalog.seo.cooperationTitle") && (
              <h3>{t("catalog.seo.cooperationTitle")}</h3>
            )}
            <ul>
              {t("catalog.seo.cooperation1Title") && (
                <li>
                  <strong>{t("catalog.seo.cooperation1Title")}</strong>{" "}
                  {t("catalog.seo.cooperation1Text")}
                </li>
              )}
              {t("catalog.seo.cooperation2Title") && (
                <li>
                  <strong>{t("catalog.seo.cooperation2Title")}</strong>{" "}
                  {t("catalog.seo.cooperation2Text")}
                </li>
              )}
              {t("catalog.seo.cooperation3Title") && (
                <li>
                  <strong>{t("catalog.seo.cooperation3Title")}</strong>{" "}
                  {t("catalog.seo.cooperation3Text")}
                </li>
              )}
            </ul>

            <p>{t("catalog.seo.conclusion")}</p>
          </SEOText>
        </Container>
      </SEOSection>

      <Lightbox
        item={lightboxItem}
        isOpen={lightboxItem !== null}
        onClose={() => setLightboxItem(null)}
        allItems={filteredItems}
        currentIndex={currentLightboxIndex}
        onNavigate={handleLightboxNavigate}
      />

      <PriceModal onContactClick={handleContactClick} />
    </CatalogContainer>
  );
};

export default Catalog;
