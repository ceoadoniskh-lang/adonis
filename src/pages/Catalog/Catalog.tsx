import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CatalogContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0;
  text-align: center;
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
  color: #666;
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

const CategoryTab = styled.button<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? "#000" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "#666")};
  border: 1px solid #ddd;
  padding: 12px 24px;
  border-radius: 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;

  &:hover {
    background: ${(props) => (props.isActive ? "#000" : "#f5f5f5")};
    color: ${(props) => (props.isActive ? "white" : "#000")};
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const CatalogItem = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ItemImage = styled.div`
  height: 300px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const OverlayButton = styled.button`
  background: white;
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const ItemContent = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #000;
  }

  p {
    color: #666;
    line-height: 1.5;
    margin-bottom: 15px;
  }
`;

const ItemTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  background: #f5f5f5;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  background: #000;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 0;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #333;
    transform: translateY(-2px);
  }
`;

const StatsSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    font-weight: 500;
  }
`;

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(8);

  const categories = [
    { key: "all", label: "Всі роботи" },
    { key: "women", label: t("catalog.categories.women") },
    { key: "men", label: t("catalog.categories.men") },
    { key: "children", label: t("catalog.categories.children") },
    { key: "uniforms", label: t("catalog.categories.uniforms") },
    { key: "textiles", label: t("catalog.categories.textiles") },
  ];

  const catalogItems = [
    {
      id: 1,
      category: "women",
      title: "Елегантна сукня",
      description: "Класична сукня з натурального шовку",
      tags: ["Шовк", "Вечірня", "Класика"],
    },
    {
      id: 2,
      category: "men",
      title: "Костюм бізнес",
      description: "Класичний бізнес-костюм з вовни",
      tags: ["Вовна", "Бізнес", "Класика"],
    },
    {
      id: 3,
      category: "children",
      title: "Дитячий костюм",
      description: "Зручний костюм для дитини",
      tags: ["Дитячий", "Зручність", "Якість"],
    },
    {
      id: 4,
      category: "uniforms",
      title: "Медичний халат",
      description: "Професійний медичний халат",
      tags: ["Медицина", "Професійний", "Зручність"],
    },
    {
      id: 5,
      category: "textiles",
      title: "Штори для вітальні",
      description: "Елегантні штори з важкої тканини",
      tags: ["Штори", "Вітальня", "Декоративні"],
    },
    {
      id: 6,
      category: "women",
      title: "Блузка офісна",
      description: "Стильна блузка для офісу",
      tags: ["Офіс", "Стиль", "Комфорт"],
    },
    {
      id: 7,
      category: "men",
      title: "Сорочка класична",
      description: "Класична сорочка з бавовни",
      tags: ["Бавовна", "Класика", "Якість"],
    },
    {
      id: 8,
      category: "textiles",
      title: "Постельна білизна",
      description: "Комплект постельної білизни",
      tags: ["Постель", "Комфорт", "Якість"],
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? catalogItems
      : catalogItems.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const stats = [
    { number: "500+", label: "виконаних проектів" },
    { number: "50+", label: "категорій одягу" },
    { number: "100%", label: "задоволених клієнтів" },
    { number: "15+", label: "років досвіду" },
  ];

  return (
    <CatalogContainer>
      <HeroSection>
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
                isActive={activeCategory === category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setVisibleItems(8);
                }}
              >
                {category.label}
              </CategoryTab>
            ))}
          </CategoryTabs>

          <CatalogGrid>
            {displayedItems.map((item) => (
              <CatalogItem key={item.id}>
                <ItemImage>
                  [Зображення виробу]
                  <ImageOverlay className="overlay">
                    <OverlayButton>Переглянути деталі</OverlayButton>
                  </ImageOverlay>
                </ItemImage>
                <ItemContent>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ItemTags>
                    {item.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </ItemTags>
                </ItemContent>
              </CatalogItem>
            ))}
          </CatalogGrid>

          {visibleItems < filteredItems.length && (
            <LoadMoreButton onClick={loadMore}>Показати більше</LoadMoreButton>
          )}
        </Container>
      </CatalogSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>
    </CatalogContainer>
  );
};

export default Catalog;
