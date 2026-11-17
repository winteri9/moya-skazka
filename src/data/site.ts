/**
 * Единственное место, где живут внешние ссылки и метаданные проекта.
 *
 * ⚠️ TELEGRAM_URL — ЗАМЕНИТЕ на ссылку своего бота (формат: https://t.me/username).
 *    Обе CTA-кнопки на странице берут адрес отсюда, больше нигде ссылка не дублируется.
 */
export const TELEGRAM_URL = "https://t.me/skazochnik_test_ai";

/** Домен сайта. Должен совпадать с `site` в astro.config.mjs. */
export const SITE_URL = "https://moya-skazka.ru";

export const SEO = {
  title: "Моя Сказка — персональные детские сказки с иллюстрациями в Telegram",
  description:
    "Придумайте любую историю — волшебный помощник в Telegram превратит её в сказку с красивой иллюстрацией. Ваш ребёнок станет героем собственной сказки.",
} as const;

/**
 * Куда подключать готовые иллюстрации (WebP/AVIF → public/images/).
 * Пока `null` — рисуется встроенная SVG-сцена в акварельной палитре проекта.
 * Поставьте путь, например "/images/hero.webp", и картинка подставится автоматически.
 */
export const ILLUSTRATIONS: {
  hero: string | null;
  example: string | null;
  finale: string | null;
} = {
  hero: null,
  example: null,
  finale: null,
};
