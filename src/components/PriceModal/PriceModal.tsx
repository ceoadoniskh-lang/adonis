import React, { useEffect, useState } from "react";
import styled from "styled-components";

const COOKIE_NAME = "priceModalShown";
const COOKIE_EXPIRY_DAYS = 5;

interface PriceModalProps {
  onContactClick: () => void;
}

const ModalOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  max-width: 400px;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;

const ModalContent = styled.div`
  background: rgba(230, 0, 118, 0.95);
  color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
`;

const ModalText = styled.p`
  margin: 0 0 20px 0;
  line-height: 1.6;
  color: white;
  font-size: 1rem;
`;

const ContactButton = styled.button`
  background: white;
  color: #e60076;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #f5f5f5;
    transform: translateY(-1px);
  }
`;

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const PriceModal: React.FC<PriceModalProps> = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieValue = getCookie(COOKIE_NAME);
    if (!cookieValue) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setCookie(COOKIE_NAME, "true", COOKIE_EXPIRY_DAYS);
  };

  const handleContactClick = () => {
    onContactClick();
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay isVisible={isVisible}>
      <ModalContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
        <ModalTitle>Бажаєте дізнатися вартість?</ModalTitle>
        <ModalText>
          Оскільки ми є прямим виробником, ціна виробу залежить від обсягу
          вашого замовлення та обраних матеріалів. Ми прагнемо запропонувати
          вам найвигідніші умови для гурту.
        </ModalText>
        <ModalText>
          Будь ласка, зв'яжіться з нашим менеджером будь-яким зручним для вас
          способом у розділі «Контакти» або натисніть ЗВ'ЯЗАТИСЯ З НАМИ. Ми
          оперативно надамо актуальний прайс-лист та розрахуємо вартість вашого
          замовлення.
        </ModalText>
        <ContactButton onClick={handleContactClick}>
          ЗВ'ЯЗАТИСЯ З НАМИ
        </ContactButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PriceModal;



