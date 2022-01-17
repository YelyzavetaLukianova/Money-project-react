import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/AuthSelectors';
import Logo from '../header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../header/UserMenu';
import s from '../header/Header.module.css';

const Nav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
