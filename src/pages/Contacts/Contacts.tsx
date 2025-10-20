import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ContactsContainer = styled.div`
  padding-top: 65px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

const ContactActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const ActionButton = styled.a`
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

const InfoItem = styled.div`
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

const ContactForm = styled.form`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const SubmitButton = styled.button`
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

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
`;

const OffHoursNotice = styled.div`
  background: #fff3cd;
  color: #856404;
  padding: 12px 16px;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 0.95rem;
`;

// Map section removed per client request

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send via mailto for now (no backend). For production, we can add Email API.
      const to = "adonisinfo8@gmail.com";
      const subject = encodeURIComponent(
        `Повідомлення з сайту від ${formData.name}`
      );
      const body = encodeURIComponent(
        `Ім'я: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\n\nПовідомлення:\n${formData.message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      await new Promise((resolve) => setTimeout(resolve, 300));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Off-hours logic: 17:00-09:00 and Sat/Sun
  const isOffHours = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun,6=Sat
    const hour = now.getHours();
    const weekend = day === 0 || day === 6;
    const outside = hour < 9 || hour >= 17;
    return weekend || outside;
  }, []);

  return (
    <ContactsContainer>
      <HeroSection>
        <Container>
          <HeroTitle>{t("contacts.title")}</HeroTitle>
          <HeroSubtitle>{t("contacts.subtitle")}</HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContentGrid>
            <ContactInfo>
              <h2>{t("contacts.info.address")}</h2>
              <InfoItem>
                <h3>Адреса</h3>
                <p>{t("common.companyLocation")}</p>
              </InfoItem>

              <InfoItem>
                <h3>{t("contacts.info.phone")}</h3>
                <p>+38 099 222 55 29</p>
                <ContactActions>
                  <ActionButton
                    href="tel:+380992225529"
                    aria-label="Подзвонити"
                  >
                    <span>📞</span>
                    <span>Подзвонити</span>
                  </ActionButton>
                </ContactActions>
              </InfoItem>

              <InfoItem>
                <h3>{t("contacts.info.email")}</h3>
                <p>
                  <a href="mailto:adonisinfo8@gmail.com">
                    adonisinfo8@gmail.com
                  </a>
                </p>
              </InfoItem>

              <InfoItem>
                <h3>Соціальні мережі</h3>
                <ContactActions>
                  <ActionButton
                    href="https://t.me/AdonisBrandUa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <span>📨</span>
                    <span>Telegram</span>
                  </ActionButton>
                  <ActionButton
                    href="https://instagram.com/adonis_market"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <span>📸</span>
                    <span>Instagram</span>
                  </ActionButton>
                </ContactActions>
              </InfoItem>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <h2>Написати нам</h2>

              {isOffHours && (
                <OffHoursNotice>{t("common.offHoursNotice")}</OffHoursNotice>
              )}

              {submitStatus === "success" && (
                <SuccessMessage>{t("contacts.form.success")}</SuccessMessage>
              )}

              {submitStatus === "error" && (
                <ErrorMessage>{t("contacts.form.error")}</ErrorMessage>
              )}

              <FormGroup>
                <Label htmlFor="name">{t("contacts.form.name")} *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">{t("contacts.form.email")} *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">{t("contacts.form.phone")}</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">{t("contacts.form.message")} *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("common.loading") : t("contacts.form.send")}
              </SubmitButton>
            </ContactForm>
          </ContentGrid>
        </Container>
      </ContentSection>
    </ContactsContainer>
  );
};

export default Contacts;
