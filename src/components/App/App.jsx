// import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { useState, Suspense } from 'react';

// import authSelectors from '../../redux/auth/AuthSelectors';
import UserMenu from '../header/UserMenu';
import Logo from '../header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import { ThemeContext, themes } from '../context/themeContext';
import HeaderCostsIncome from '../HeaderCostsIncome/HeaderCostsIncome';
import Expense from '../Expense/Expense';
import Income from '../Income/Income';

import LoaderB from '../../common/Loader/Loader';
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <header className={s.header}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Logo />
                  <ThemeSwitcher />
                </div>
                {/* {isLoggedIn && */}
                <UserMenu />
                {/* } */}
              </header>

              <Suspense fallback={<LoaderB />}>
                <HeaderCostsIncome />
                <Switch>
                  <Route exact path="/expense">
                    <Expense />
                  </Route>
                  <Route exact path="/income">
                    <Income />
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </ThemeContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
