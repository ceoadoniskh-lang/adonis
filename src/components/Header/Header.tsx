import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../img/Logo/Black/PNG/5.png";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 44px;
  width: auto;
  display: block;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    gap: 20px;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#000" : "#666")};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #f5f5f5;
    color: #000;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &.active {
    color: #000;
    font-weight: 600;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  flex-direction: column;
  gap: 4px;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.span<{ isOpen: boolean; index: number }>`
  width: 25px;
  height: 2px;
  background: #000;
  transition: all 0.3s ease;
  transform-origin: center;

  ${(props) =>
    props.isOpen &&
    props.index === 0 &&
    `
    transform: rotate(45deg) translate(6px, 6px);
  `}

  ${(props) =>
    props.isOpen &&
    props.index === 1 &&
    `
    opacity: 0;
  `}

  ${(props) =>
    props.isOpen &&
    props.index === 2 &&
    `
    transform: rotate(-45deg) translate(6px, -6px);
  `}
`;

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
