import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoWhite from "../../img/Logo/White/PNG/5.png";
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  LogoImage,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright,
  FooterLinks,
} from "./Footer.styles";

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
              <SocialLink
                href="viber://chat?number=+380992225529"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.027 1.51 5.716L.03 24l6.35-1.51c1.69.96 3.637 1.51 5.637 1.51 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001zM12.017 21.99c-1.79 0-3.48-.44-4.97-1.22l-.36-.21-3.75.89.89-3.75-.21-.36c-.78-1.49-1.22-3.18-1.22-4.97 0-5.52 4.49-9.99 9.99-9.99s9.99 4.47 9.99 9.99c0 5.52-4.49 9.99-9.99 9.99z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://wa.me/380992225529"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.214-.361a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://facebook.com/adonisbrand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="mailto:adonisinfo8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
