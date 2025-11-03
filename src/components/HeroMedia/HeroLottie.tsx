import React, { useEffect, useMemo } from "react";

type HeroLottieProps = {
  url: string;
  height?: number;
};

const HeroLottie: React.FC<HeroLottieProps> = ({ url, height = 360 }) => {
  const isDotLottie = useMemo(
    () => url.endsWith(".lottie") || url.includes("lottie.host"),
    [url]
  );

  useEffect(() => {
    if (isDotLottie) {
      const scriptId = "dotlottie-wc-script";
      if (!document.getElementById(scriptId)) {
        const s = document.createElement("script");
        s.id = scriptId;
        s.type = "module";
        s.src =
          "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
        document.body.appendChild(s);
      }
    } else {
      const scriptId = "lottie-player-script";
      if (!document.getElementById(scriptId)) {
        const s = document.createElement("script");
        s.id = scriptId;
        s.src =
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
        s.async = true;
        document.body.appendChild(s);
      }
    }
  }, [isDotLottie]);

  return (
    <section
      style={{
        padding: "40px 0",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isDotLottie ? (
          // @ts-ignore
          <dotlottie-wc
            autoplay
            loop
            src={url}
            style={{ width: "100%", maxWidth: 900, height }}
          />
        ) : (
          // @ts-ignore
          <lottie-player
            autoplay
            loop
            mode="normal"
            src={url}
            style={{ width: "100%", maxWidth: 900, height }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroLottie;
