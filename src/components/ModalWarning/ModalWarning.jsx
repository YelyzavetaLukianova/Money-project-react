import { useState, useCallback } from 'react';
// import { useState, useCallback, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import ModalWarningWindow from './ModalWarningWindow';
import s from './ModalWarning.module.css';

const ModalWarning = () => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true); // for test

  const onClose = useCallback(
    () => setIsFormOpen(prevIsFormOpen => !prevIsFormOpen),
    [],
  );
  // useEffect(() => {
  // if (balance !== 0) return;
  //   setTimeout(isFormOpen(true), 1000);
  //   setTimeout(onClose, 3000);
  // }, [balance]);

  return (
    <>
      {isFormOpen && (
        <ModalWarningWindow onClose={onClose}>
          <div className={s.modal}>
            <p className={s.upperText}>
              Привет! Для начала работы внеси текущий баланс своего счета!
            </p>
            <p className={s.lowerText}>
              Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
          </div>
        </ModalWarningWindow>
      )}
    </>
  );
};

export default ModalWarning;
