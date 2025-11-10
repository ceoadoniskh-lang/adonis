import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./Services.styles";
import { HeroBackground } from "./Services.styles";
import BottomCta from "../../components/CTA/BottomCta";
import AdonisCollectionImage from "../../img/imgs/catalog/2021_08_12_adonis66066.jpg";
import BrandProductionImage from "../../img/imgs/service/logo/service-logo.jpg";
import GerberCuttingImage from "../../img/imgs/service/herber/herber.jpg";
import QuiltingImage from "../../img/imgs/service/coupler/coupler.jpg";
import EmbroideryImage from "../../img/imgs/service/embroidery/sewing.jpg";
import BagsImage from "../../img/imgs/service/bugs/60AFE0F2-47BF-48A9-8AC9-24AC94A63D58.jpg";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "adonisCollection",
      image: AdonisCollectionImage,
    },
    {
      key: "brandProduction",
      image: BrandProductionImage,
    },
    {
      key: "gerberCutting",
      image: GerberCuttingImage,
    },
    {
      key: "quilting",
      image: QuiltingImage,
    },
    {
      key: "embroidery",
      image: EmbroideryImage,
    },
    {
      key: "bags",
      image: BagsImage,
    },
  ];

  const processSteps = [
    {
      number: "1",
      key: "consultation",
    },
    {
      number: "2",
      key: "measurement",
    },
    {
      number: "3",
      key: "production",
    },
    {
      number: "4",
      key: "fitting",
    },
    {
      number: "5",
      key: "delivery",
    },
  ];

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
    <S.ServicesContainer>
      <S.HeroSection>
        <HeroBackground>
          {/* @ts-ignore web component */}
          <dotlottie-wc
            autoplay
            loop
            src="https://lottie.host/b820fea7-368d-4b73-9f74-4b270ff147c7/sw07Zgfg7T.lottie"
            style={{ width: "100%", height: "100%" }}
          />
        </HeroBackground>
        <S.Container>
          <S.HeroTitle>{t("services.title")}</S.HeroTitle>
          <S.HeroSubtitle>{t("services.subtitle")}</S.HeroSubtitle>
        </S.Container>
      </S.HeroSection>

      <S.ServicesSection>
        <S.Container>
          <S.ServicesGrid>
            {services.map((service) => (
              <S.ServiceCard key={service.key}>
                <S.ServiceImage>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={t(`services.list.${service.key}.title`)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    "[Зображення послуги]"
                  )}
                </S.ServiceImage>
                <S.ServiceContent>
                  <h3>{t(`services.list.${service.key}.title`)}</h3>
                  <p>{t(`services.list.${service.key}.description`)}</p>
                  <S.ServiceFeatures>
                    {(
                      t(`services.list.${service.key}.features`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </S.ServiceFeatures>
                  <S.ServiceButton to="/contacts">
                    {t("common.contactUs")}
                  </S.ServiceButton>
                </S.ServiceContent>
              </S.ServiceCard>
            ))}
          </S.ServicesGrid>
        </S.Container>
      </S.ServicesSection>

      <S.ProcessSection>
        <S.Container>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            {t("services.process.title")}
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#333",
              marginBottom: "60px",
            }}
          >
            {t("services.process.subtitle")}
          </p>
          <S.ProcessGrid>
            {processSteps.map((step, index) => (
              <S.ProcessStep key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{t(`services.process.steps.${step.key}.title`)}</h3>
                <p>{t(`services.process.steps.${step.key}.description`)}</p>
              </S.ProcessStep>
            ))}
          </S.ProcessGrid>
        </S.Container>
      </S.ProcessSection>

      <BottomCta />
    </S.ServicesContainer>
  );
};

export default Services;
