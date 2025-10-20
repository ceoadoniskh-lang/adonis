import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServicesContainer = styled.div`
  padding-top: 80px;
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

const ServicesSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ServiceCard = styled.div`
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

const ServiceImage = styled.div`
  height: 250px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.1rem;
`;

const ServiceContent = styled.div`
  padding: 30px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  li {
    padding: 5px 0;
    color: #666;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #000;
      font-weight: bold;
    }
  }
`;

const ServiceButton = styled(Link)`
  display: inline-block;
  background: #000;
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #333;
    transform: translateY(-2px);
  }
`;

const ProcessSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ProcessStep = styled.div`
  text-align: center;

  .step-number {
    width: 60px;
    height: 60px;
    background: #000;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 20px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const CtaSection = styled.section`
  padding: 100px 0;
  background: #000;
  color: white;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #000;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "clothing",
      features: [
        "Індивідуальний підбір матеріалів",
        "Точний крій за розмірами",
        "Контроль якості на кожному етапі",
        "Гарантія на виконання",
      ],
    },
    {
      key: "uniforms",
      features: [
        "Корпоративний стиль",
        "Довговічні матеріали",
        "Великі обсяги виробництва",
        "Логістичні послуги",
      ],
    },
    {
      key: "textiles",
      features: [
        "Домашній текстиль",
        "Штори та портьєри",
        "Постельна білизна",
        "Декоративні вироби",
      ],
    },
    {
      key: "repair",
      features: [
        "Ремонт одягу",
        "Переробка фасонів",
        "Підгонка під фігуру",
        "Реставрація старовинного одягу",
      ],
    },
    {
      key: "design",
      features: [
        "Розробка дизайну",
        "Створення крію",
        "Технічні креслення",
        "Консультації стиліста",
      ],
    },
    {
      key: "consultation",
      features: [
        "Підбір матеріалів",
        "Консультації по фасонах",
        "Розрахунок вартості",
        "Планування термінів",
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Консультація",
      description:
        "Обговорюємо ваші потреби, підбираємо матеріали та розраховуємо вартість",
    },
    {
      number: "2",
      title: "Заміри",
      description: "Проводимо точні заміри та створюємо індивідуальний крій",
    },
    {
      number: "3",
      title: "Виробництво",
      description: "Виконуємо пошив з дотриманням всіх технологічних процесів",
    },
    {
      number: "4",
      title: "Контроль якості",
      description: "Перевіряємо готовий виріб та проводимо фінальну підгонку",
    },
    {
      number: "5",
      title: "Доставка",
      description: "Доставляємо готовий одяг або організовуємо самовивіз",
    },
  ];

  return (
    <ServicesContainer>
      <HeroSection>
        <Container>
          <HeroTitle>{t("services.title")}</HeroTitle>
          <HeroSubtitle>{t("services.subtitle")}</HeroSubtitle>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.key}>
                <ServiceImage>[Зображення послуги]</ServiceImage>
                <ServiceContent>
                  <h3>{t(`services.list.${service.key}.title`)}</h3>
                  <p>{t(`services.list.${service.key}.description`)}</p>
                  <ServiceFeatures>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                  <ServiceButton to="/contacts">
                    {t("common.contactUs")}
                  </ServiceButton>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <ProcessSection>
        <Container>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Процес роботи
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "60px",
            }}
          >
            Як ми працюємо з нашими клієнтами
          </p>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>

      <CtaSection>
        <Container>
          <CtaTitle>Готові розпочати співпрацю?</CtaTitle>
          <CtaSubtitle>
            Зв'яжіться з нами для обговорення вашого проекту та отримання
            індивідуальної пропозиції
          </CtaSubtitle>
          <CtaButton to="/contacts">{t("common.contactUs")}</CtaButton>
        </Container>
      </CtaSection>
    </ServicesContainer>
  );
};

export default Services;
