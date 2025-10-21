import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mock react-i18next so tests don't depend on i18n setup
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const map = {
        appName: 'P4 Review',
        login: 'Login',
        logout: 'Logout',
      };
      return map[key] || key;
    },
  }),
}));

describe('Header', () => {
  test('renders app name and login button when no user', () => {
    const onLogin = jest.fn();
    render(<Header onLogin={onLogin} onLogout={jest.fn()} />);

    // app name from t('appName')
    expect(screen.getByText('P4 Review')).toBeInTheDocument();

    const loginBtn = screen.getByRole('button', { name: /Login/i });
    expect(loginBtn).toBeInTheDocument();

    fireEvent.click(loginBtn);
    expect(onLogin).toHaveBeenCalled();
  });

  test('renders avatar and logout when user is provided', () => {
    const onLogout = jest.fn();
    const user = { name: 'Test User', avatar: '/assets/avatars/user.png' };

    render(<Header user={user} onLogin={jest.fn()} onLogout={onLogout} />);

    // avatar uses user.name as alt
    expect(screen.getByAltText('Test User')).toBeInTheDocument();

    const logoutBtn = screen.getByRole('button', { name: /Logout/i });
    expect(logoutBtn).toBeInTheDocument();

    fireEvent.click(logoutBtn);
    expect(onLogout).toHaveBeenCalled();
  });
});