import { useContext } from 'react';
import { ThemeContext, themes } from '../context/themeContext';
import s from './Header.module.css';
import defaultLogo1 from './logo.svg';
import defaultLogo2 from './logoW.svg';

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  const logo1 = defaultLogo1;
  const logo2 = defaultLogo2;
  return (
    <div>
      <a className={s.logo} href="/">
        <img src={theme === themes.light ? logo1 : logo2} alt="logo" />
      </a>
    </div>
  );
};
export default Logo;
