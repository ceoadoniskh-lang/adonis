# Чеклист SEO для adonisfactory.com

## Що вже зроблено (розробка)

- **Домен і хостинг**: домен на GoDaddy, хостинг на Firebase
- **Мова сторінки**: в `index.html` стоїть `lang="uk"` — Google буде вважати сторінку українською.
- **Sitemap і robots.txt**: оновлені на `https://adonisfactory.com`; sitemap містить усі сторінки та hreflang (uk, ru, en).
- **Мета-теги**: title/description українською, Open Graph, canonical, structured data (Organization).

---

## Що потрібно зробити після деплою (відповідальність: SEO / маркетинг)

### 1. Google Search Console (обов’язково)

1. Зайти на [Google Search Console](https://search.google.com/search-console).
2. Додати ресурс **«Префікс URL»** → `https://adonisfactory.com`.
3. Підтвердити володіння одним із способів:
   - **HTML-тег** у `<head>` (розробник може додати за 1 хв), або  
   - **DNS-запис** у GoDaddy (TXT для домену), або  
   - **HTML-файл** у корені сайту (Firebase Hosting дозволяє).
4. Після підтвердження:
   - Відправити sitemap: **Sitemaps** → додати `https://adonisfactory.com/sitemap.xml`.
   - Запросити індексацію головної: **Перевірка URL** → вставити `https://adonisfactory.com` → «Запросити індексацію».

Без Search Console Google може довго не індексувати сайт або показувати його некоректно.

### 2. Налаштування для України та мови

- У Search Console: **Налаштування** → **Країна, на яку орієнтований сайт** — можна вказати Україну (якщо є така опція для префіксу).
- Контент на сайті вже українською; головна мова в коді — `lang="uk"`. Це достатньо, щоб пошук показував сайти українською.

### 3. Додатково

- **Google Analytics 4** — щоб бачити відвідування та поведінку (у проєкті вже є `analytics.ts` — перевірити підключення).
- **Bing Webmaster Tools** — додати сайт і sitemap для Bing.

