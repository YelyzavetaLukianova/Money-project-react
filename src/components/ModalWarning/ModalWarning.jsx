import { useState, useCallback, useEffect } from 'react';
// import { useState, useCallback, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import s from './ModalWarning.module.css';

const ModalWarning = ({ initialBalance, modalWarnProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = useCallback(
    () => setIsModalOpen(prevIsModalOpen => (prevIsModalOpen = false)),
    [],
  );

  // useEffect(() => {
  //   if (modalWarnProps) {
  //     return onClose;
  //   }
  //   modalWarnProps = false;
  // }, [modalWarnProps, onClose]);

  useEffect(() => {
    let closeId = null;
    let openId = setTimeout(() => {
      if (!initialBalance) {
        setIsModalOpen(true);

        closeId = setTimeout(onClose, 10000);
      }
    }, 2000);
    return () => {
      clearTimeout(closeId);
      clearTimeout(openId);
    };
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
