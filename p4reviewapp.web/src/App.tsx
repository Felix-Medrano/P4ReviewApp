import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import { User } from './components/Header/Header.types';
import './config/i18n/i18n';

function App() {
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => setUser({ name: 'Felix', avatar: 'assets/avatars/defaultAvatar.png' });
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/dashboard" element={<div>{t('dashboard')}</div>} />
          <Route path="/reviews" element={<div>{t('myReviews')}</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;