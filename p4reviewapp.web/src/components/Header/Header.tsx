import React from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.types';
import { useTranslation } from 'react-i18next';

const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.section}>
        <img src={'/assets/icons/icon-512.png'} alt="App icon" className={styles.icon} />
        <span className={styles.appName}>{t('appName')}</span>
      </div>

      {/* Center Section */}

      {/* Right Section */}
      <div className={styles.section}>
        {user ? (
          <>
            <img
              src={user.avatar || 'assets/avatars/defaultAvatar.png'}
              alt={user.name}
              className={styles.avatar}
            />
            <button className={styles.button} onClick={onLogout}>
              {t('logout')}
            </button>
          </>
        ) : (
          <button className={styles.button} onClick={onLogin}>
            {t('login')}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;