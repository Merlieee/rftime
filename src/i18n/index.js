import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './pl';
import en from './en';

const isPolishBrowser = () => {
  const langs = navigator.languages || [navigator.language || ''];
  return langs.some((l) => l.toLowerCase().startsWith('pl'));
};

const urlLang = new URLSearchParams(window.location.search).get('lang');
const fromUrl = urlLang === 'pl' || urlLang === 'en' ? urlLang : null;
if (fromUrl) localStorage.setItem('rftime-lang', fromUrl);

const saved = localStorage.getItem('rftime-lang');
const defaultLang = fromUrl ?? saved ?? (isPolishBrowser() ? 'pl' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },
    lng: defaultLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Keep <html lang>, the tab title and the description in sync so screen readers,
// bookmarks and search engines see the right language. Link previews are unaffected —
// scrapers never run this, they read the static tags in index.html and /en/index.html.
function applyLangToDocument(lang) {
  document.documentElement.lang = lang;
  document.title = i18n.t('meta.title', { lng: lang });
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description', { lng: lang }));
}

applyLangToDocument(defaultLang);

export function setLang(lang) {
  localStorage.setItem('rftime-lang', lang);
  i18n.changeLanguage(lang);
  applyLangToDocument(lang);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function isPolishUser() {
  return isPolishBrowser();
}

export default i18n;
