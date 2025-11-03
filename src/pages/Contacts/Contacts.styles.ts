import styled from "styled-components";

export const ContactsContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0;
  text-align: center;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.35;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

export const ContentSection = styled.section`
  padding: 100px 0;
  background: white;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

export const ContactActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #000;
  color: #fff;
  padding: 10px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
`;

export const ContactForm = styled.form`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e60076;
    box-shadow: 0 0 0 3px rgba(230, 0, 118, 0.15);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e60076;
    box-shadow: 0 0 0 3px rgba(230, 0, 118, 0.15);
  }
`;

export const SubmitButton = styled.button`
  background: #000;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #333;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`;

export const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
`;

export const OffHoursNotice = styled.div`
  background: #fff3cd;
  color: #856404;
  padding: 12px 16px;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 0.95rem;
`;
