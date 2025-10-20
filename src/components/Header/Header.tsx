import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoImage,
  Nav,
  NavLink,
  LanguageSelector,
  LanguageButton,
  MobileMenuButton,
  MenuLine,
} from "./Header.styles";
import LogoImg from "../../img/Logo/Black/PNG/5.png";

// styles are imported from Header.styles

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: "home", path: "/" },
    { key: "contacts", path: "/contacts" },
    { key: "history", path: "/history" },
    { key: "services", path: "/services" },
    { key: "catalog", path: "/catalog" },
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/" aria-label={t("header.logo")}>
          <LogoImage src={LogoImg} alt={t("header.logo")} />
        </Logo>

        <Nav isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}

          <LanguageSelector>
            <LanguageButton
              className={i18n.language === "ua" ? "active" : ""}
              onClick={() => changeLanguage("ua")}
            >
              Укр
            </LanguageButton>
            <LanguageButton
              className={i18n.language === "ru" ? "active" : ""}
              onClick={() => changeLanguage("ru")}
            >
              Рус
            </LanguageButton>
            <LanguageButton
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              Eng
            </LanguageButton>
          </LanguageSelector>
        </Nav>

        <MobileMenuButton onClick={toggleMenu}>
          <MenuLine isOpen={isMenuOpen} index={0} />
          <MenuLine isOpen={isMenuOpen} index={1} />
          <MenuLine isOpen={isMenuOpen} index={2} />
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
