import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../img/Logo/White/PNG/5.png";

const FooterContainer = styled.footer`
  background: #000;
  color: white;
  padding: 60px 0 20px;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const LogoImage = styled.img`
  height: 36px;
  width: auto;
  display: block;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #555;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #999;
  font-size: 14px;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  a {
    color: #999;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: "home", path: "/" },
    { key: "contacts", path: "/contacts" },
    { key: "history", path: "/history" },
    { key: "services", path: "/services" },
    { key: "catalog", path: "/catalog" },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <LogoImage src={LogoWhite} alt={t("footer.company") as string} />
            <p>{t("footer.description")}</p>
            <SocialLinks>
              <SocialLink
                href="https://t.me/AdonisBrandUa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.035 15.448l-.373 5.263c.534 0 .765-.229 1.041-.503l2.5-2.4 5.182 3.796c.949.523 1.624.249 1.887-.879l3.418-16.004h.001c.304-1.42-.513-1.972-1.435-1.625L1.397 9.34C.016 9.875.037 10.66 1.158 11.02l5.21 1.627L19.5 5.931c.704-.46 1.346-.206.817.254" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://instagram.com/adonis_market"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>{t("footer.contacts")}</h3>
            <p>
              <strong>{t("footer.address")}:</strong>
              <br />
              {t("common.companyLocation")}
            </p>
            <p>
              <strong>{t("footer.phone")}:</strong>
              <br />
              <a href="tel:+380992225529" style={{ color: "#ccc" }}>
                +38 099 222 55 29
              </a>
            </p>
            <p>
              <strong>{t("footer.email")}:</strong>
              <br />
              <a href="mailto:adonisinfo8@gmail.com" style={{ color: "#ccc" }}>
                adonisinfo8@gmail.com
              </a>
            </p>
          </FooterSection>

          <FooterSection>
            <h3>Каталог</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link to={item.path}>{t(`nav.${item.key}`)}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Інформація</h3>
            <ul>
              <li>
                <Link to="/history">{t("nav.history")}</Link>
              </li>
              <li>
                <Link to="/services">{t("nav.services")}</Link>
              </li>
              <li>
                <Link to="/contacts">{t("nav.contacts")}</Link>
              </li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2025 {t("footer.company")}. {t("footer.copyright")} |
            <a
              href="https://www.linkedin.com/in/yevhen-romanenko-271163168/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", marginLeft: 6 }}
            >
              created by yevhen_romanenko
            </a>
          </Copyright>
          <FooterLinks>
            <a href="/public-offer">{t("footer.publicOffer")}</a>
            <a href="/privacy-policy">{t("footer.privacyPolicy")}</a>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
