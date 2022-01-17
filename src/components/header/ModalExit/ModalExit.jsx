import React from 'react';
import Button from '../../../common/Button/Button';
import s from './ModalExit.module.css';

const ModalExit = ({ title, onClose, onExit }) => {
  return (
    <div>
      <p className={s.title}>{title}</p>
      <div className={s.wrap}>
        <Button text="Da" onClick={onExit} className={s.yes} />
        <Button text="No" onClick={onClose} className={s.no} />
      </div>
    </div>
  );
};
export default ModalExit;
