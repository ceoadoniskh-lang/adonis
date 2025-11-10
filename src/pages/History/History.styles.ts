import styled from "styled-components";

export const HistoryContainer = styled.div`
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

export const TimelineSection = styled.section`
  padding: 100px 0;
  background: white;
`;

export const HistoryIntro = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: #000;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ddd;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled.div<{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  width: 100%;

  ${(props) =>
    props.$isEven
      ? `
    justify-content: flex-start;
  `
      : `
    justify-content: flex-end;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding-left: 40px;
  }
`;

export const TimelineContent = styled.div<{ $isEven: boolean }>`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 400px;
  width: 100%;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  ${(props) =>
    props.$isEven
      ? `
    margin-right: 0;
    margin-left: -80px;
    
    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 20px;
      max-width: 100%;
      flex: 1;
    }
  `
      : `
    margin-left: 0;
    margin-right: -80px;
    
    @media (max-width: 768px) {
      margin-left: 20px;
      margin-right: 0;
      max-width: 100%;
      flex: 1;
    }
  `}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;

    ${(props) =>
      props.$isEven
        ? `
      right: -30px;
      border-left-color: white;
      
      @media (max-width: 768px) {
        left: -30px;
        right: auto;
        border-left-color: transparent;
        border-right-color: white;
      }
    `
        : `
      left: -30px;
      border-right-color: white;
      
      @media (max-width: 768px) {
        left: -30px;
        border-right-color: white;
      }
    `}

    transform: translateY(-50%);
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.6;
    font-size: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

export const TimelineYear = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 2;
  flex-shrink: 0;

  @media (max-width: 768px) {
    left: 10px;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    left: 10px;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    font-size: 0.8rem;
  }
`;

export const StatsSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

export const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
  }
`;

export const TeamSection = styled.section`
  padding: 100px 0;
  background: white;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

export const TeamMember = styled.div`
  text-align: center;

  .member-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #f5f5f5;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    color: #333;
    font-size: 1rem;
  }
`;
