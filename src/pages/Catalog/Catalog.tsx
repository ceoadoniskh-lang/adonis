import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
  position: relative;
  z-index: 2;
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
  padding: 100px 0;
  background: white;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border: 2px solid ${(props) => (props.active ? "#000" : "#ddd")};
  background: ${(props) => (props.active ? "#000" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000;
    background: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ItemCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemImage = styled.div`
  height: 250px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
`;

const ItemContent = styled.div`
  padding: 30px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ItemTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background: #f0f0f0;
  color: #333;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ItemStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    display: block;
  }

  p {
    color: #333;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const ItemActions = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: 2px solid #000;
  background: white;
  color: #000;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
    color: white;
  }

  &.primary {
    background: #000;
    color: white;

    &:hover {
      background: #333;
    }
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  background: #000;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #333;
    transform: translateY(-1px);
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

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [itemsToShow, setItemsToShow] = useState(6);

  const categories = [
    { key: "all", label: t("catalog.categories.all") },
    { key: "clothing", label: t("catalog.categories.clothing") },
    { key: "corporate", label: t("catalog.categories.corporate") },
    { key: "accessories", label: t("catalog.categories.accessories") },
  ];

  const catalogItems = [
    {
      id: 1,
      title: "Класичний костюм",
      description: "Елегантний бізнес-костюм з натуральної вовни",
      category: "clothing",
      tags: ["бізнес", "класика", "вовна"],
      stats: { price: "₴2500", time: "7 днів", rating: "4.9" },
    },
    {
      id: 2,
      title: "Корпоративна форма",
      description: "Уніформа для персоналу ресторану",
      category: "corporate",
      tags: ["корпоратив", "уніформа", "ресторан"],
      stats: { price: "₴800", time: "5 днів", rating: "4.8" },
    },
    {
      id: 3,
      title: "Вечірня сукня",
      description: "Розкішна сукня для особливих випадків",
      category: "clothing",
      tags: ["вечірня", "розкіш", "особливі випадки"],
      stats: { price: "₴3200", time: "10 днів", rating: "5.0" },
    },
    {
      id: 4,
      title: "Дитячий костюм",
      description: "Стильний костюм для дитини",
      category: "clothing",
      tags: ["дитячий", "стильний", "шкільний"],
      stats: { price: "₴1200", time: "4 дні", rating: "4.7" },
    },
    {
      id: 5,
      title: "Робочий одяг",
      description: "Міцний робочий одяг для будівництва",
      category: "corporate",
      tags: ["робочий", "міцний", "будівництво"],
      stats: { price: "₴600", time: "3 дні", rating: "4.6" },
    },
    {
      id: 6,
      title: "Спортивний костюм",
      description: "Зручний спортивний костюм",
      category: "clothing",
      tags: ["спортивний", "зручний", "активний"],
      stats: { price: "₴1500", time: "6 днів", rating: "4.8" },
    },
  ];

  const filteredItems = catalogItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const displayedItems = filteredItems.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

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
          <CategoryTabs>
            {categories.map((category) => (
              <CategoryTab
                key={category.key}
                active={activeCategory === category.key}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </CategoryTab>
            ))}
          </CategoryTabs>

          {displayedItems.length > 0 ? (
            <>
              <ItemsGrid>
                {displayedItems.map((item) => (
                  <ItemCard key={item.id}>
                    <ItemImage>[Зображення виробу]</ItemImage>
                    <ItemContent>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <ItemTags>
                        {item.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </ItemTags>
                      <ItemStats>
                        <StatItem>
                          <span className="number">{item.stats.price}</span>
                          <p>Вартість</p>
                        </StatItem>
                        <StatItem>
                          <span className="number">{item.stats.time}</span>
                          <p>Термін</p>
                        </StatItem>
                        <StatItem>
                          <span className="number">{item.stats.rating}</span>
                          <p>Рейтинг</p>
                        </StatItem>
                      </ItemStats>
                      <ItemActions>
                        <ActionButton>Детальніше</ActionButton>
                        <ActionButton className="primary">
                          Замовити
                        </ActionButton>
                      </ItemActions>
                    </ItemContent>
                  </ItemCard>
                ))}
              </ItemsGrid>

              {itemsToShow < filteredItems.length && (
                <LoadMoreButton onClick={handleLoadMore}>
                  {t("catalog.loadMore")}
                </LoadMoreButton>
              )}
            </>
          ) : (
            <EmptyState>
              <h3>{t("catalog.noItems")}</h3>
              <p>{t("catalog.noItemsDescription")}</p>
            </EmptyState>
          )}
        </Container>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalog;
