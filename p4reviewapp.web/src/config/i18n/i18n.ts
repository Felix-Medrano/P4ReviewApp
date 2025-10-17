import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Detección segura del idioma
const getBrowserLanguage = () => {
  try {
    const browserLang = navigator.language;
    const supportedLangs = [
      'en', // English
      'es'  // Spanish
    ];
    
    if (!browserLang) return 'es';
    
    const langCode = browserLang.split('-')[0];
    return supportedLangs.includes(langCode) ? langCode : 'en';
  } catch (error) {
    console.warn('Error detecting browser language, defaulting to English');
    return 'en';
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: getBrowserLanguage(),
  fallbackLng: "en",
  interpolation: { 
    escapeValue: false 
  },
  debug: process.env.NODE_ENV === 'development',
});

export default i18n;