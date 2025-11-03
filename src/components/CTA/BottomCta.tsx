import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 0;
  background: #000;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const Button = styled(Link)`
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
  border: 2px solid transparent;

  &:hover {
    background: #f0f0f0;
    border-color: #e60076;
    transform: translateY(-2px);
  }
`;

const BottomCta: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Title>{t("home.cta.title")}</Title>
        <Subtitle>{t("home.cta.subtitle")}</Subtitle>
        <Button to="/contacts">{t("common.contactUs")}</Button>
      </Container>
    </Section>
  );
};

export default BottomCta;
