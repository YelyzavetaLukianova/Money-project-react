import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use-size';
import s from './BackHomeButton.module.css';

export default function BackHomeButton() {
  const { width } = useWindowSize();
  return (
    <NavLink to="/expence">
      <div className={s.wrapper}>
        <span className={s.back_symbol}>&#8592;</span>
        {width > 480 && <p className={s.text}>Вернуться на главную</p>}
      </div>
    </NavLink>
  );
}
