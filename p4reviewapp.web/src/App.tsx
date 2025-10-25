import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';
import { User } from './components/Header/Header.types';
import './config/i18n/i18n';

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <Header user={user} onLogin={() => setUser({ name: 'Felix' })} onLogout={() => setUser(null)} />
      <Home />
    </div>
  );
}

export default App;