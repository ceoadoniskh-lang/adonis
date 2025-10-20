import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ua from "./locales/ua.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const resources = {
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ua",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      // Определение языка по локации
      convertDetectedLanguage: (lng: string) => {
        // Если язык не определен, пытаемся определить по локации
        if (!lng || lng === "und") {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          // Определяем язык по часовому поясу
          if (
            timezone.includes("Europe/Kiev") ||
            timezone.includes("Europe/Kyiv")
          ) {
            return "ua";
          } else if (
            timezone.includes("Europe/Moscow") ||
            timezone.includes("Europe/")
          ) {
            return "ru";
          } else {
            return "en";
          }
        }

        // Маппинг языков браузера на наши языки
        if (lng.startsWith("uk") || lng.startsWith("ua")) {
          return "ua";
        } else if (lng.startsWith("ru")) {
          return "ru";
        } else if (lng.startsWith("en")) {
          return "en";
        }

        return "ua"; // По умолчанию украинский
      },
    },
  });

export default i18n;
