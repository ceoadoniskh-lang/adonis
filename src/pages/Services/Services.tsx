import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./Services.styles";
import { HeroBackground } from "./Services.styles";
import BottomCta from "../../components/CTA/BottomCta";
import AdonisCollectionImage from "../../img/imgs/catalog/IMG_1453.JPEG";
import BrandProductionImage from "../../img/imgs/service/logo/service-logo.jpg";
import GerberCuttingImage from "../../img/imgs/service/herber/herber.jpg";
import QuiltingImage from "../../img/imgs/service/coupler/coupler.jpg";
import EmbroideryImage from "../../img/imgs/service/embroidery/sewing.jpg";
import BagsImage from "../../img/imgs/service/bugs/20200219_124249.jpg";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "adonisCollection",
      image: AdonisCollectionImage,
    },
    {
      key: "bags",
      image: BagsImage,
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
  ];

  const processSteps = [
    {
      number: "01",
      key: "request",
    },
    {
      number: "02",
      key: "patterns",
    },
    {
      number: "03",
      key: "sample",
    },
    {
      number: "04",
      key: "production",
    },
    {
      number: "05",
      key: "qualityControl",
    },
    {
      number: "06",
      key: "packaging",
    },
    {
      number: "07",
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
            {services.map((service, index) => (
              <S.ServiceCard key={service.key}>
                <S.ServiceImage $isFirstThree={index < 3}>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={t(`services.list.${service.key}.title`)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
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
