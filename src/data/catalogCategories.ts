export interface CatalogCategory {
  key: string;
  label: {
    uk: string;
    en: string;
    ru: string;
  };
  folderName: string;
  images: string[];
}

export const catalogCategories: CatalogCategory[] = [
  {
    key: "bombers",
    label: {
      uk: "Бомбери",
      en: "Bombers",
      ru: "Бомберы",
    },
    folderName: "Бомбери",
    images: [],
  },
  {
    key: "windbreakers",
    label: {
      uk: "Вітровки",
      en: "Windbreakers",
      ru: "Ветровки",
    },
    folderName: "Вітровки",
    images: [],
  },
  {
    key: "demi-season",
    label: {
      uk: "Демісезонні куртки",
      en: "Demi-season Jackets",
      ru: "Демисезонные куртки",
    },
    folderName: "Демісезонні куртки",
    images: [],
  },
  {
    key: "eco-linings",
    label: {
      uk: "Еко дублянки",
      en: "Eco Linings",
      ru: "Эко дубленки",
    },
    folderName: "Еко дублянки",
    images: [],
  },
  {
    key: "eco-fur",
    label: {
      uk: "Еко шубки",
      en: "Eco Fur Coats",
      ru: "Эко шубы",
    },
    folderName: "Еко шубки",
    images: [],
  },
  {
    key: "jackets",
    label: {
      uk: "Жакети",
      en: "Jackets",
      ru: "Жакеты",
    },
    folderName: "Жакети",
    images: [],
  },
  {
    key: "vests",
    label: {
      uk: "Жилети",
      en: "Vests",
      ru: "Жилеты",
    },
    folderName: "Жилети",
    images: [],
  },
  {
    key: "winter-jackets",
    label: {
      uk: "Зимові куртки",
      en: "Winter Jackets",
      ru: "Зимние куртки",
    },
    folderName: "Зимові куртки",
    images: [],
  },
  {
    key: "raincoats",
    label: {
      uk: "Плащі",
      en: "Raincoats",
      ru: "Плащи",
    },
    folderName: "Плащі",
    images: [],
  },
  {
    key: "bags",
    label: {
      uk: "Сумки",
      en: "Bags",
      ru: "Сумки",
    },
    folderName: "Сумки",
    images: [],
  },
];

export const getCategoryByKey = (key: string): CatalogCategory | undefined => {
  return catalogCategories.find((cat) => cat.key === key);
};

export const getAllCategoryKeys = (): string[] => {
  return catalogCategories.map((cat) => cat.key);
};
