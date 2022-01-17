import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import Logo from '../header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../header/UserMenu';
import s from '../header/Header.module.css';

const Nav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.header}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <ThemeSwitcher />
      </div>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};
export default Nav;
