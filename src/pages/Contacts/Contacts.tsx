import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ContactsContainer,
  HeroSection,
  Container,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  ContentGrid,
  ContactInfo,
  InfoItem,
  ContactActions,
  ActionButton,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
  OffHoursNotice,
} from "./Contacts.styles";
import { HeroBackground } from "./Contacts.styles";

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
      const payload = {
        service_id: "service_7r7841c",
        template_id: "template_2mngzf4",
        user_id: "GIThHwyW2FXt0x_KO",
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          site: "adonis",
          time: new Date().toLocaleString(),
        },
      };

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Email send failed with status ${res.status}`);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isOffHours = useMemo(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const weekend = day === 0 || day === 6;
    const outside = hour < 9 || hour >= 17;
    return weekend || outside;
  }, []);

  useEffect(() => {
    const scriptId = "lottie-player-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src =
        "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <ContactsContainer>
      <HeroSection>
        <HeroBackground>
          {/* @ts-ignore web component */}
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ width: "100%", height: "100%" }}
          />
        </HeroBackground>
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
                <h3>{t("contacts.info.addressLabel")}</h3>
                <p>{t("common.companyLocation")}</p>
              </InfoItem>

              <InfoItem>
                <h3>{t("contacts.info.phone")}</h3>
                <p>+38 099 222 55 29</p>
                <ContactActions>
                  <ActionButton
                    href="tel:+380992225529"
                    aria-label={t("common.call")}
                  >
                    <span>📞</span>
                    <span>{t("common.call")}</span>
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
                <h3>{t("contacts.info.socialNetworks")}</h3>
                <ContactActions>
                  <ActionButton
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
                      style={{ marginRight: 8 }}
                    >
                      <path d="M9.035 15.448l-.373 5.263c.534 0 .765-.229 1.041-.503l2.5-2.4 5.182 3.796c.949.523 1.624.249 1.887-.879l3.418-16.004h.001c.304-1.42-.513-1.972-1.435-1.625L1.397 9.34C.016 9.875.037 10.66 1.158 11.02l5.21 1.627L19.5 5.931c.704-.46 1.346-.206.817.254" />
                    </svg>
                    <span>Telegram</span>
                  </ActionButton>
                  <ActionButton
                    href="https://instagram.com/adonis.factory"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginRight: 8 }}
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </ActionButton>
                  <ActionButton
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
                      style={{ marginRight: 8 }}
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.027 1.51 5.716L.03 24l6.35-1.51c1.69.96 3.637 1.51 5.637 1.51 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001zM12.017 21.99c-1.79 0-3.48-.44-4.97-1.22l-.36-.21-3.75.89.89-3.75-.21-.36c-.78-1.49-1.22-3.18-1.22-4.97 0-5.52 4.49-9.99 9.99-9.99s9.99 4.47 9.99 9.99c0 5.52-4.49 9.99-9.99 9.99z" />
                    </svg>
                    <span>Viber</span>
                  </ActionButton>
                  <ActionButton
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
                      style={{ marginRight: 8 }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.214-.361a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </ActionButton>
                  <ActionButton
                    href="https://www.facebook.com/profile.php?id=61586643953821"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginRight: 8 }}
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </ActionButton>
                  <ActionButton
                    href="https://www.youtube.com/@ADONIS.FACTORY"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginRight: 8 }}
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>YouTube</span>
                  </ActionButton>
                  <ActionButton
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
                      style={{ marginRight: 8 }}
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Email</span>
                  </ActionButton>
                </ContactActions>
              </InfoItem>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <h2>{t("contacts.form.title")}</h2>

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
