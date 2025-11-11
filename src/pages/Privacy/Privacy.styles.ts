import styled from "styled-components";

export const PrivacyContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
  background: #f8f9fa;
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
  display: flex;
  align-items: center;
  justify-content: center;

  dotlottie-wc {
    width: auto !important;
    height: 100% !important;
    max-width: 100%;
  }
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
  color: #000;

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

export const ContentSection = styled.section`
  padding: 80px 0;
  background: white;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #333;

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #000;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #000;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
