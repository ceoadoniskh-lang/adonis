import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  @media (max-width: 1024px) {
    backdrop-filter: blur(8px);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  @media (max-width: 1024px) {
    height: 72px;
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    height: 64px;
    padding: 0 14px;
  }
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 1001;
`;

export const LogoImage = styled.img`
  height: 44px;
  width: auto;
  display: block;
  @media (max-width: 1024px) {
    height: 36px;
  }
  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 1200px) {
    gap: 28px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    transform: ${(props) =>
      props.$isOpen ? "translateY(0)" : "translateY(-120%)"};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    gap: 20px;
    z-index: 900;
  }
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#000" : "#333")};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }

  &:hover {
    color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 2px;
    background: ${(props) => (props.$isActive ? "#e60076" : "#000")};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    background: #e60076;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  outline: none;
  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 4px 8px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }

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

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  flex-direction: column;
  gap: 4px;
  outline: none;
  position: relative;
  z-index: 1001;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuLine = styled.span<{ $isOpen: boolean; $index: number }>`
  width: 25px;
  height: 2px;
  background: #000;
  transition: all 0.3s ease;
  transform-origin: center;

  ${(props) =>
    props.$isOpen &&
    props.$index === 0 &&
    `
    transform: translateY(6px) rotate(45deg);
  `}

  ${(props) =>
    props.$isOpen &&
    props.$index === 1 &&
    `
    opacity: 0;
  `}

  ${(props) =>
    props.$isOpen &&
    props.$index === 2 &&
    `
    transform: translateY(-6px) rotate(-45deg);
  `}
`;
