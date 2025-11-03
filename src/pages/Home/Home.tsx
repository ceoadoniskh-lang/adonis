import React from "react";
import { useTranslation } from "react-i18next";
import AdonisCollectionImage from "../../img/imgs/catalog/2021_08_12_adonis66066.jpg";
import BrandProductionImage from "../../img/imgs/catalog/DLR_4871.jpg";
import GerberCuttingImage from "../../img/imgs/catalog/DLR_4974.jpg";
import QuiltingImage from "../../img/imgs/catalog/DLR_5113.jpg";
import EmbroideryImage from "../../img/imgs/catalog/DLR_5579.jpg";
import * as S from "./Home.styles";
import BottomCta from "../../components/CTA/BottomCta";

const HERO_VIDEO_ID = process.env.REACT_APP_HERO_VIDEO_ID || "wY1_bzKV8bM";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.HomeContainer>
      <S.HeroSection>
        <S.VideoContainer>
          {HERO_VIDEO_ID ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${HERO_VIDEO_ID}&modestbranding=1&rel=0&disablekb=1&playsinline=1&iv_load_policy=3&fs=0&cc_load_policy=0&showinfo=0`}
                title="Hero video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <S.VideoLoadingOverlay />
            </>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            ></div>
          )}
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
          <S.SectionSubtitle>{t("home.aboutText")}</S.SectionSubtitle>
          <S.AboutGrid>
            <S.AboutText>
              <h3>{t("home.qualityTitle")}</h3>
              <p>{t("home.qualityText1")}</p>
              <p>{t("home.qualityText2")}</p>
            </S.AboutText>
            <S.AboutImage>
              <img
                src="/LDV_0265.jpg"
                alt={t("home.productionImage")}
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
            <S.ServiceCard to="/services">
              <img src={AdonisCollectionImage} alt={t("home.service1Title")} />
              <h3>{t("home.service1Title")}</h3>
              <p>{t("home.service1Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={BrandProductionImage} alt={t("home.service2Title")} />
              <h3>{t("home.service2Title")}</h3>
              <p>{t("home.service2Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={GerberCuttingImage} alt={t("home.service3Title")} />
              <h3>{t("home.service3Title")}</h3>
              <p>{t("home.service3Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={QuiltingImage} alt={t("home.service4Title")} />
              <h3>{t("home.service4Title")}</h3>
              <p>{t("home.service4Description")}</p>
            </S.ServiceCard>
            <S.ServiceCard to="/services">
              <img src={EmbroideryImage} alt={t("home.service5Title")} />
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
