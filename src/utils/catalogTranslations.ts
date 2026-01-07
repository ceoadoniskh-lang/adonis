import { useTranslation } from "react-i18next";

export const useCatalogItemTranslation = (itemId: string) => {
  const { t } = useTranslation();

  return {
    name: t(`catalog.items.${itemId}.name`, itemId),
    altText: t(`catalog.items.${itemId}.altText`, itemId),
    userText: t(`catalog.items.${itemId}.userText`, itemId),
  };
};

export const getCatalogItemTranslation = (
  itemId: string,
  field: "name" | "altText" | "userText",
  t: (key: string, defaultValue?: string) => string
): string => {
  return t(`catalog.items.${itemId}.${field}`, itemId);
};


