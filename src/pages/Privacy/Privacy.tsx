import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./Privacy.styles";
import { HeroBackground } from "./Privacy.styles";

const Privacy: React.FC = () => {
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

  return (
    <S.PrivacyContainer>
      <S.HeroSection>
        <HeroBackground>
          {/* @ts-ignore web component */}
          <dotlottie-wc
            autoplay
            loop
            src="https://lottie.host/5e7f9432-8d6a-43bd-a25c-33d7893222ee/gpuigKK01X.lottie"
            style={{ width: "auto", height: "100%", maxWidth: "100%" }}
          />
        </HeroBackground>
        <S.Container>
          <S.HeroTitle>{t("privacy.title")}</S.HeroTitle>
          <S.HeroSubtitle>{t("privacy.subtitle")}</S.HeroSubtitle>
        </S.Container>
      </S.HeroSection>

      <S.ContentSection>
        <S.Container>
          <S.Content>
            {t("privacy.content")
              .split("\n\n")
              .map((paragraph: string, index: number) =>
                paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
              )}
          </S.Content>
        </S.Container>
      </S.ContentSection>
    </S.PrivacyContainer>
  );
};

export default Privacy;
