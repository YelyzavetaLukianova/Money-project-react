import { useEffect } from 'react';

import s from './ModalWarning.module.css';

const ModalWarning = ({
  initialBalance,
  isModalOpen,
  onClose,
  setIsModalOpen,
}) => {
  useEffect(() => {
    let closeId = null;
    let openId = setTimeout(() => {
      if (!initialBalance) {
        setIsModalOpen(true);

        closeId = setTimeout(onClose, 5000);
      }
    }, 2000);
    return () => {
      clearTimeout(closeId);
      clearTimeout(openId);
    };
  }, [initialBalance, onClose, setIsModalOpen]);

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
