import { defineConfig } from "astro/config";

// Сборка для GitHub Pages живёт в подпапке репозитория: /moya-skazka/.
// В CI переменная GH_PAGES=true (см. .github/workflows/deploy.yml).
// Локально и на собственном домене — прежние site/base, ничего не меняется.
const GH_PAGES = process.env.GH_PAGES === "true";

// Одна страница: весь CSS инлайнится в HTML, внешних CSS-запросов нет.
export default defineConfig({
  // Замените на реальный домен перед деплоем — нужен для canonical и og:url.
  site: GH_PAGES ? "https://winteri9.github.io" : "https://moya-skazka.ru",
  base: GH_PAGES ? "/moya-skazka" : "/",
  output: "static",
  compressHTML: true,
  build: { inlineStylesheets: "always" },
});
