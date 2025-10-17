import React from 'react';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'; // Importar la configuración

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    // Cambia entre español e inglés
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t("currentLanguage")}: <strong>{i18n.language}</strong></p>
      <p>{t('test')}</p>
    </div>
  );
}

export default App;