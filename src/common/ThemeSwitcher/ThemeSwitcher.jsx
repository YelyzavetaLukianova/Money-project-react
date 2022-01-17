import { useContext } from 'react';
import { ThemeContext, themes } from '../../components/Context/themeContext';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className={s.conteiner}>
      <label className={s.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === themes.dark}
        />
        <span className={`${s.slider} ${s.round}`}></span>
      </label>
    </div>
  );
};
export default ThemeSwitcher;
