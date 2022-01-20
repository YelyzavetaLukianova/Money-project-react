import { useState, Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { ThemeContext, themes } from '../Context/themeContext';

import { refreshSession } from '../../redux/auth/authOperations';
import { getIsRefreshCurrentUser } from '../../redux/auth/authSelectors';

import * as storage from '../../services/localStorage';

import { routes, AuthRoute, NotAuthRoute } from '../../routes';

import LoaderB from '../../common/Loader';
import Nav from '../Nav/Nav';

import s from '../Header/Header.module.css';

const AuthPage = lazy(() =>
  import('../../pages/AuthPage' /* webpackChunkName: "AuthPage___page" */),
);
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "HomePage___page" */),
);
const ReportPage = lazy(() =>
  import('../../pages/ReportPage' /* webpackChunkName: "ReportPage___page" */),
);

const { AUTH, EXPENSE, INCOME, REPORT } = routes;

const STORAGE_KEY = 'theme';

const App = () => {
  const [theme, setTheme] = useState(
    () => storage.get(STORAGE_KEY) ?? themes.light,
  );

  //локал сторадж
  useEffect(() => {
    storage.save(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);

  const isRefreshCurrentUser = useSelector(getIsRefreshCurrentUser);

  if (isRefreshCurrentUser) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={s.conteinerHead}>
            <Nav />
          </div>

          {/* <Suspense fallback={<LoaderB />}> */}
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <NotAuthRoute exact path={AUTH} redirectTo={EXPENSE}>
                <AuthPage />
              </NotAuthRoute>

              <AuthRoute exact path={EXPENSE} redirectTo={AUTH}>
                <HomePage />
              </AuthRoute>
              <AuthRoute exact path={INCOME} redirectTo={AUTH}>
                <HomePage />
              </AuthRoute>
              <AuthRoute exact path={REPORT} redirectTo={AUTH}>
                <ReportPage />
              </AuthRoute>

              <Redirect to={AUTH} />
            </Switch>
          </Suspense>
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default App;
