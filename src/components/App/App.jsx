import { useState, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext, themes } from '../context/themeContext';
import HeaderCostsIncome from '../HeaderCostsIncome/HeaderCostsIncome';
import Expense from '../Expense/Expense';
import Income from '../Income/Income';
import LoaderB from '../../common/Loader/Loader';
import s from '../header/Header.module.css';
import Nav from '../Nav/Nav';
import AuthPage from '../../pages/AuthPage/AuthPage';
import * as storage from '../../services/localStorage';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const STORAGE_KEY = 'theme';

const App = () => {
  const [theme, setTheme] = useState(
    () => storage.get(STORAGE_KEY) ?? themes.light,
  );
  const isLoggedIn = useSelector(getIsLoggedIn);

  //локал сторадж
  useEffect(() => {
    storage.save(STORAGE_KEY, theme);
  }, [theme]);
  const toggleTheme = () =>
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  return (
    <>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={s.conteinerHead}>
            <header style={{ margin: '0 auto' }}>
              <Nav />
            </header>
          </div>

          {!isLoggedIn ? (
            <AuthPage />
          ) : (
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
          )}
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default App;
