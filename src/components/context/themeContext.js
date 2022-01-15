import { createContext } from 'react';

const themes = {
  light: 'light',
  dark: 'dark',
};
const ThemeContext = createContext({ theme: '', toggleTheme: () => {} });

export { ThemeContext, themes };
