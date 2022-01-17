import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/AuthSelectors';
import Logo from '../Header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../Header/UserMenu';
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
