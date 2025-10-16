import i18n, { Resource } from "i18next";
import { initReactI18next } from 'react-i18next';

import de from './locales/de.json';
//import en from './locales/en.json';

const resources: Resource = {
  de: {
    translation: de
  }/*,
    en: {
      translation: en,
    }
    */
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    //fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;