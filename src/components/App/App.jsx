import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from '../../redux/auth/AuthSelectors';
import UserMenu from '../header/UserMenu';
import Logo from '../header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import { ThemeContext, themes } from '../context/themeContext';
import { useLocalStorage } from 'react-use';
import s from '../header/Header.module.css';

const STORAGE_KEY = 'theme';

const App = () => {
  const [theme, setTheme] = useLocalStorage(STORAGE_KEY, themes.light);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const toggleTheme = () =>
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  return (
    <>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <div className={s.conteiner}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <header className={s.header}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Logo />
                <ThemeSwitcher />
              </div>
              {/* {isLoggedIn && */}
              <UserMenu />
            </header>
          </ThemeContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
