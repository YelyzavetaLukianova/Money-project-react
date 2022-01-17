import React from 'react';
import Button from '../../../common/Button/Button';
import s from './ModalExit.module.css';

const ModalExit = ({ title, onClose, onExit }) => {
  return (
    <div>
      <p className={s.title}>{title}</p>
      <div className={s.wrap}>
        <Button text="Da" onClick={onExit} />
        <button onClick={onClose} className={s.no}>
          Net
        </button>
        {/* <Button text="Net" onClick={onClose} className={s.no} /> */}
      </div>
    </div>
  );
};
export default ModalExit;
