import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  HistoryContainer,
  HeroSection,
  Container,
  HeroTitle,
  HeroSubtitle,
  TimelineSection,
  HistoryIntro,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineYear,
  StatsSection,
  StatsGrid,
  StatItem,
  HeroBackground,
} from "./History.styles";

const History: React.FC = () => {
  const { t } = useTranslation();

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

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1988;

  const stats = [
    { number: `${yearsOfExperience}+`, label: t("history.stats.experience") },
    { number: "500+", label: t("history.stats.clients") },
    { number: "50+", label: t("history.stats.specialists") },
    { number: "1000+", label: t("history.stats.orders") },
  ];

  // const team = [
  //   { name: "Олександр Петренко", position: "Директор виробництва" },
  //   { name: "Марія Коваленко", position: "Головний дизайнер" },
  //   { name: "Іван Сидоренко", position: "Майстер-кравчик" },
  //   { name: "Анна Мельник", position: "Контролер якості" },
  // ];

  return (
    <HistoryContainer>
      <HeroSection>
        <HeroBackground>
          {/* @ts-ignore web component */}
          <dotlottie-wc
            autoplay
            loop
            src="https://lottie.host/dcff35da-c647-4de3-b728-a1a439c1a27d/F36Vo1Q7bX.lottie"
            style={{ width: "100%", height: "100%" }}
          />
        </HeroBackground>
        <Container>
          <HeroTitle>{t("history.title")}</HeroTitle>
          <HeroSubtitle>{t("history.subtitle")}</HeroSubtitle>
        </Container>
      </HeroSection>

      <TimelineSection>
        <Container>
          <HistoryIntro>
            <h2>{t("history.introTitle")}</h2>
            {t("history.introText")
              .split("\n\n")
              .map((paragraph: string, index: number) =>
                paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
              )}
            <p>{t("history.cooperationText")}</p>
          </HistoryIntro>

          <Timeline>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} isEven={index % 2 === 0}>
                <TimelineContent isEven={index % 2 === 0}>
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

      {/* <TeamSection>
        <Container>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#000",
            }}
          >
            Професіонали, які створюють якісний одяг
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
                <div className="member-photo">Фото</div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection> */}
    </HistoryContainer>
  );
};

export default History;
