import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0;
  text-align: center;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.35;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

export const ServicesSection = styled.section`
  padding: 100px 0;
  background: white;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

export const ServiceCard = styled.div`
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

export const ServiceImage = styled.div<{ $isFirstThree?: boolean }>`
  height: 400px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.1rem;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const ServiceContent = styled.div`
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

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  li {
    padding: 5px 0;
    color: #333;
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

export const ServiceButton = styled(Link)`
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
  border: 2px solid transparent;

  &:hover {
    background: #333;
    border-color: #e60076;
    transform: translateY(-2px);
  }
`;

export const ProcessSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

export const ProcessStep = styled.div`
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
    color: #333;
    line-height: 1.6;
  }
`;
