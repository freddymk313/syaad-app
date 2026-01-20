import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Importer fichiers de traduction
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(initReactI18next) // passer à react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: Localization.locale.split('-')[0], // langue par défaut selon le téléphone
    fallbackLng: 'fr', // langue de secours si la langue n'est pas traduite
    interpolation: {
      escapeValue: false, // react déjà safe
    },
  });

export default i18n;
