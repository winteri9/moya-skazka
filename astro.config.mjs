import { defineConfig } from "astro/config";

// Одна страница: весь CSS инлайнится в HTML, внешних CSS-запросов нет.
export default defineConfig({
  // Замените на реальный домен перед деплоем — нужен для canonical и og:url.
  site: "https://moya-skazka.ru",
  output: "static",
  compressHTML: true,
  build: { inlineStylesheets: "always" },
});
