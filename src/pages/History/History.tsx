import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HistoryContainer = styled.div`
  padding-top: 65px;
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
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

const TimelineSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const Timeline = styled.div`
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

const TimelineItem = styled.div<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 60px;
  }

  ${(props) =>
    props.isEven
      ? `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `
      : ""}
`;

const TimelineContent = styled.div<{ isEven: boolean }>`
  flex: 1;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  ${(props) =>
    props.isEven
      ? `
    margin-right: 40px;
    
    @media (max-width: 768px) {
      margin-right: 0;
    }
  `
      : `
    margin-left: 40px;
    
    @media (max-width: 768px) {
      margin-left: 0;
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
      props.isEven
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
    line-height: 1.7;
    font-size: 1.1rem;
  }
`;

const TimelineYear = styled.div`
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

  @media (max-width: 768px) {
    left: 30px;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    font-size: 1rem;
  }
`;

const StatsSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled.div`
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

const TeamSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const TeamMember = styled.div`
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

const History: React.FC = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      year: t("history.timeline.founded.year"),
      title: t("history.timeline.founded.title"),
      description: t("history.timeline.founded.description"),
    },
    {
      year: t("history.timeline.expansion.year"),
      title: t("history.timeline.expansion.title"),
      description: t("history.timeline.expansion.description"),
    },
    {
      year: t("history.timeline.modernization.year"),
      title: t("history.timeline.modernization.title"),
      description: t("history.timeline.modernization.description"),
    },
    {
      year: t("history.timeline.present.year"),
      title: t("history.timeline.present.title"),
      description: t("history.timeline.present.description"),
    },
  ];

  const stats = [
    { number: "15+", label: "років досвіду" },
    { number: "500+", label: "задоволених клієнтів" },
    { number: "50+", label: "спеціалістів" },
    { number: "1000+", label: "виконаних замовлень" },
  ];

  const team = [
    { name: "Олександр Петренко", position: "Директор виробництва" },
    { name: "Марія Коваленко", position: "Головний дизайнер" },
    { name: "Іван Сидоренко", position: "Майстер-кравчик" },
    { name: "Анна Мельник", position: "Контролер якості" },
  ];

  return (
    <HistoryContainer>
      <HeroSection>
        <Container>
          <HeroTitle>{t("history.title")}</HeroTitle>
          <HeroSubtitle>{t("history.subtitle")}</HeroSubtitle>
        </Container>
      </HeroSection>

      <TimelineSection>
        <Container>
          <Timeline>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} isEven={index % 2 === 1}>
                <TimelineContent isEven={index % 2 === 1}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TimelineContent>
                <TimelineYear>{item.year}</TimelineYear>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </TimelineSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <TeamSection>
        <Container>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Наша команда
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#333",
              marginBottom: "60px",
            }}
          >
            Професіонали, які створюють якісний одяг
          </p>

          <TeamGrid>
            {team.map((member, index) => (
              <TeamMember key={index}>
                <div className="member-photo">[Фото співробітника]</div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>
    </HistoryContainer>
  );
};

export default History;
