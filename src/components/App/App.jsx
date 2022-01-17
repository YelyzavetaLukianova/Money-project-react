import { useSelector } from 'react-redux';
import { useState } from 'react';
// import authSelectors from '../../redux/auth/AuthSelectors';
import UserMenu from '../header/UserMenu';
import Logo from '../header/Logo';
import AuthPage from '../../pages/AuthPage/AuthPage';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import { ThemeContext, themes } from '../context/themeContext';
import s from '../header/Header.module.css';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
              {/* } */}
            </header>
          </ThemeContext.Provider>
        </div>

        <AuthPage />
      </div>
    </>
  );
};

export default App;
