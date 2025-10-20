import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductionVideo from "../../img/video/LTVN.mp4";

const HomeContainer = styled.div`
  padding-top: 65px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #000;
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid transparent;

  &:hover {
    background: #333;
    border-color: #e60076;
    transform: translateY(-2px);
  }
`;

const ContentSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #333;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 20px;
  }
`;

const AboutImage = styled.div`
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 40px 20px;
  border: 1px solid #eee;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    color: #333;
    line-height: 1.6;
  }
`;

const CatalogPreview = styled.div`
  text-align: center;
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const CatalogItem = styled.div`
  height: 300px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <HeroSection>
        <VideoContainer>
          <video autoPlay muted loop playsInline>
            <source src={ProductionVideo} type="video/mp4" />
          </video>
        </VideoContainer>
        <VideoOverlay />
        <HeroContent>
          <HeroTitle>{t("home.title")}</HeroTitle>
          <HeroSubtitle>{t("home.subtitle")}</HeroSubtitle>
          <CTAButton to="/contacts">{t("common.contactUs")}</CTAButton>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>{t("home.about")}</SectionTitle>
          <SectionSubtitle>{t("home.aboutText")}</SectionSubtitle>

          <AboutGrid>
            <AboutText>
              <h3>{t("home.qualityTitle")}</h3>
              <p>{t("home.qualityText1")}</p>
              <p>{t("home.qualityText2")}</p>
            </AboutText>
            <AboutImage>
              <img src="/src/img/imgs/manufacture/LDV_0265.jpg" alt="Виробництво" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </AboutImage>
          </AboutGrid>

          <SectionTitle>{t("home.services")}</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <h3>Пошив одягу</h3>
              <p>
                Індивідуальний пошив чоловічого, жіночого та дитячого одягу за
                вашими розмірами та побажаннями.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h3>Корпоративний одяг</h3>
              <p>
                Виробництво форменого та корпоративного одягу для різних сфер
                діяльності.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h3>Ремонт одягу</h3>
              <p>
                Професійний ремонт, переробка та підгонка одягу під ваші
                потреби.
              </p>
            </ServiceCard>
          </ServicesGrid>

          <SectionTitle>{t("home.catalog")}</SectionTitle>
          <CatalogPreview>
            <CatalogGrid>
              <CatalogItem>[Приклад роботи 1]</CatalogItem>
              <CatalogItem>[Приклад роботи 2]</CatalogItem>
              <CatalogItem>[Приклад роботи 3]</CatalogItem>
              <CatalogItem>[Приклад роботи 4]</CatalogItem>
            </CatalogGrid>
            <CTAButton to="/catalog">{t("catalog.viewAll")}</CTAButton>
          </CatalogPreview>
        </Container>
      </ContentSection>
    </HomeContainer>
  );
};

export default Home;
