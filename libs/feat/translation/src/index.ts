import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export { I18nextProvider, useTranslation } from 'react-i18next';

const resources = {
  en: {
    common: require('./locales/en/common.json'),
    appMeet: require('./locales/en/apps/meet.json'),
  },
  fr: {
    common: require('./locales/fr/common.json'),
    appMeet: require('./locales/fr/apps/meet.json'),
  },
};

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
