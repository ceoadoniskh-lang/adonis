import React from "react";
import { useTranslation } from "react-i18next";
import AdonisCollectionImage from "../../img/imgs/catalog/IMG_1453.webp";
import BrandProductionImage from "../../img/imgs/service/logo/service-logo.webp";
import GerberCuttingImage from "../../img/imgs/service/herber/herber.webp";
import QuiltingImage from "../../img/imgs/service/coupler/coupler.webp";
import EmbroideryImage from "../../img/imgs/service/embroidery/sewing.webp";
import BagsImage from "../../img/imgs/service/bugs/20200219_124249.webp";
import ManufactureImage from "../../img/imgs/manufacture/IMG_1314.webp";
import * as S from "./Home.styles";
import BottomCta from "../../components/CTA/BottomCta";

const HERO_VIDEO_URL =
  process.env.REACT_APP_HERO_VIDEO_URL || "/video/hero-video.mp4";
const HERO_VIDEO_POSTER = "/video/hero-video-screen.webp";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.HomeContainer>
      <S.HeroSection>
        <S.VideoContainer>
          <S.HeroVideo
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_VIDEO_POSTER}
            src={HERO_VIDEO_URL}
          >
            {t("home.videoNotSupported")}
          </S.HeroVideo>
        </S.VideoContainer>
        <S.HeroContent>
          <h1>{t("home.title")}</h1>
          <p>{t("home.subtitle")}</p>
          <S.CTAButton to="/contacts">{t("common.contactUs")}</S.CTAButton>
        </S.HeroContent>
      </S.HeroSection>

      <S.ContentSection>
        <S.Container>
          <S.SectionTitle>{t("home.about")}</S.SectionTitle>
          <S.SectionSubtitle>
            {t("home.aboutText")
              .split("\n\n")
              .map((paragraph: string, index: number) =>
                paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
              )}
          </S.SectionSubtitle>
          <S.QualityTitle>{t("home.qualityTitle")}</S.QualityTitle>
          <S.AboutGrid>
            <S.AboutText>
              {t("home.qualityText1")
                .split("\n\n")
                .map((paragraph: string, index: number) =>
                  paragraph.trim() ? (
                    <p key={index}>{paragraph.trim()}</p>
                  ) : null
                )}
              {t("home.qualityText2")
                .split("\n\n")
                .map((paragraph: string, index: number) =>
                  paragraph.trim() ? (
                    <p key={`text2-${index}`}>{paragraph.trim()}</p>
                  ) : null
                )}
            </S.AboutText>
            <S.AboutImage>
              <img
                src={ManufactureImage}
                alt={t("home.productionImage")}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </S.AboutImage>
          </S.AboutGrid>
        </S.Container>
      </S.ContentSection>

      <S.ContentSection>
        <S.Container>
          <S.SectionTitle>{t("home.services")}</S.SectionTitle>
          <S.SectionSubtitle>{t("home.cta.subtitle")}</S.SectionSubtitle>
          <S.ServicesGrid>
            <S.ServiceCard to="/services" className="first-three">
              <img src={AdonisCollectionImage} alt={t("home.service1Title")} loading="lazy" />
              <h3>{t("home.service1Title")}</h3>
              <p>{t("home.service1Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services" className="first-three">
              <img src={BagsImage} alt={t("home.service6Title")} loading="lazy" />
              <h3>{t("home.service6Title")}</h3>
              <p>{t("home.service6Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services" className="first-three">
              <img src={BrandProductionImage} alt={t("home.service2Title")} loading="lazy" />
              <h3>{t("home.service2Title")}</h3>
              <p>{t("home.service2Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={GerberCuttingImage} alt={t("home.service3Title")} loading="lazy" />
              <h3>{t("home.service3Title")}</h3>
              <p>{t("home.service3Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={QuiltingImage} alt={t("home.service4Title")} loading="lazy" />
              <h3>{t("home.service4Title")}</h3>
              <p>{t("home.service4Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={EmbroideryImage} alt={t("home.service5Title")} loading="lazy" />
              <h3>{t("home.service5Title")}</h3>
              <p>{t("home.service5Description")}</p>
            </S.ServiceCard>
          </S.ServicesGrid>
        </S.Container>
      </S.ContentSection>

      <BottomCta />
    </S.HomeContainer>
  );
};

export default Home;
