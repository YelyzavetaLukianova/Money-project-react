import { Switch, Route } from 'react-router-dom';
import { useState, Suspense, useEffect } from 'react';

import { ThemeContext, themes } from '../Context/themeContext';
// import { useLocalStorage } from 'react-use';
import HeaderCostsIncome from '../HeaderCostsIncome/HeaderCostsIncome';
import Expense from '../Expense/Expense';
import Income from '../Income/Income';
import LoaderB from '../../common/Loader/Loader';
import s from '../header/Header.module.css';
import Nav from '../Nav/Nav';
import * as storage from '../../services/localStorage';

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
  return (
    <>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <div className={s.conteinerHead}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <header>
              <Nav />
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
          </ThemeContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
