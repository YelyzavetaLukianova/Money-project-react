import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/AuthSelectors';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import Logo from '../header/Logo';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../header/UserMenu';

const Nav = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <ThemeSwitcher />
      </div>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};
export default Nav;
