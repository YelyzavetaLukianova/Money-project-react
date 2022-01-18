import { useState, Suspense, useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeContext, themes } from '../Context/themeContext';
import HeaderCostsIncome from '../HeaderCostsIncome/HeaderCostsIncome';
// import Expense from '../Expense/Expense';
// import Income from '../Income/Income';
import LoaderB from '../../common/Loader/Loader';
import s from '../Header/Header.module.css';
import Nav from '../Nav/Nav';
import AuthPage from '../../pages/AuthPage/AuthPage';
import * as storage from '../../services/localStorage';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { routes, AuthRoute, NotAuthRoute } from '../../routes';

// const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
// const Expense = lazy(() => import('../Expense/Expense'));
// const Income = lazy(() => import('../Income/Income'));
// const Report = lazy(() => import('report'));
const { AUTH, BALANSE, REPORT } = routes;

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

          <Suspense fallback={<LoaderB />}>
            <Switch>
              <Route exact path={AUTH}>
                <AuthPage />
              </Route>
            </Switch>
          </Suspense>

          {/* {!isLoggedIn ? (
            <AuthPage />
          ) : (
            <Suspense fallback={<LoaderB />}>
              <HeaderCostsIncome />
      */}
          {/* <Switch>
                <NotAuthRoute restricted path={AUTH} redirectTo={AUTH}>
                  <AuthPage />
                </NotAuthRoute>

                <AuthRoute path={EXPENSE} redirectTo={INCOME}>
                  <Expense />
                </AuthRoute>

                <AuthRoute path={INCOME} redirectTo={INCOME}>
                  <Income />
                </AuthRoute>

                <AuthRoute path={REPORT} redirectTo={INCOME}>
                  <Report />
                </AuthRoute>

                <Redirect to={routes.AUTH} />
              </Switch> */}
          {/* <Switch>
                <Route exact path="/expense">
                  <Expense />
                </Route>
                <Route exact path="/income">
                  <Income />
                </Route>
              </Switch> */}
          {/* </Suspense>
          )} */}
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default App;
