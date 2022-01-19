import { useState, useCallback, useEffect } from 'react';
// import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './ModalWarning.module.css';

const ModalWarning = () => {
  // const initialBalance = useSelector(state => state.balance.balance);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(true); // for test

  const onClose = useCallback(
    () => setIsModalOpen(prevIsModalOpen => (prevIsModalOpen = false)),
    [],
  );

  const initialBalance = 0;
  console.log(!initialBalance);

  useEffect(() => {
    if (!initialBalance) {
      setIsModalOpen(true);
      setTimeout(onClose, 2000);
    }
  }, [initialBalance, onClose]);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleModalClick = e => {
    if (e.target !== e.currentTarget) return onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className={s.modalContainer} onClick={handleModalClick}>
          <div className={s.modal}>
            <p className={s.upperText}>
              Привет! Для начала работы внеси текущий баланс своего счета!
            </p>
            <p className={s.lowerText}>
              Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWarning;
