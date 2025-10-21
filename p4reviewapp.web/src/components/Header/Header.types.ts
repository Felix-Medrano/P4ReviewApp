// Interfaces para el componente Header
export interface User {
  name: string;
  avatar?: string;
}

export interface HeaderProps {
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
}