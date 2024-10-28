import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export { I18nextProvider, useTranslation } from 'react-i18next';

import enAppMeet from './locales/en/apps/meet.json';
import enCommon from './locales/en/common.json';
import frAppMeet from './locales/fr/apps/meet.json';
import frCommon from './locales/fr/common.json';

const resources = {
  en: {
    common: enCommon,
    appMeet: enAppMeet,
  },
  fr: {
    common: frCommon,
    appMeet: frAppMeet,
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
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
