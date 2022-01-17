import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/AuthSelectors';
import authOperations from '../../redux/auth/AuthOperations';
import { useState, useCallback } from 'react';
import ModalExit from './ModalExit/ModalExit';
import Modal from '../../common/Modal/Modal';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import s from './Header.module.css';

const UserMenu = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const toggleForm = useCallback(
    () => setIsFormOpen(prevIsFormOpen => !prevIsFormOpen),
    [],
  );
  return (
    <div className={s.wrap}>
      {isLoggedIn && <p className={s.avatar}>{email[0].toUpperCase()}</p>}
      <span className={s.titleuser}>{email}</span>
      <button className={s.userBtn} type="button" onClick={toggleForm}>
        <RiLogoutBoxRLine className={s.iconEx} size={16} />
        <p className={s.exit}>Exit</p>
      </button>
      {isFormOpen && (
        <Modal closeForm={toggleForm}>
          <ModalExit
            title="Вы действительно хотите выйти?"
            onClose={toggleForm}
            onExit={() => dispatch(authOperations.logout())}
          />
        </Modal>
      )}
    </div>
  );
};
export default UserMenu;