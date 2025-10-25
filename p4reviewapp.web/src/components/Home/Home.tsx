import React from 'react';
import styles from './Home.module.css';
import banner from '../../assets/images/home/homeBanner.webp';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <img src={banner} alt="Banner" className={styles.bannerImage} />

        <div className={styles.heroContent}>
          <h1>{t('homeHeroTitle')}</h1>
          <p>
            {t("homeHeroText")}
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <h3 className={styles.featuresTitle}>{t("homeKeyFeaturesTittle")}</h3>
        <h2>{t("homeKeyFeaturesSlogan")}</h2>
        <p className={styles.multilineText}>
          {t("homeKeyFeaturesText")}
        </p>
        {/* Card One */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>{t("cardOneTitle")}</h4>
            <p>
              {t("cardOneText")}
            </p>
          </div>
          {/* Card Two */}
          <div className={styles.card}>
            <h4>{t("cardTwoTitle")}</h4>
            <p>
              {t("cardTwoText")}
            </p>
          </div>
          {/* Card Three */}
          <div className={styles.card}>
            <h4>{t("cardThreeTitle")}</h4>
            <p>
              {t("cardThreeText")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;