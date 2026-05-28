import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './pl';
import en from './en';

const isPolishBrowser = () => {
  const langs = navigator.languages || [navigator.language || ''];
  return langs.some((l) => l.toLowerCase().startsWith('pl'));
};

const saved = localStorage.getItem('rftime-lang');
const defaultLang = saved ?? (isPolishBrowser() ? 'pl' : 'en');

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

export function setLang(lang) {
  localStorage.setItem('rftime-lang', lang);
  i18n.changeLanguage(lang);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function isPolishUser() {
  return isPolishBrowser();
}

export default i18n;
