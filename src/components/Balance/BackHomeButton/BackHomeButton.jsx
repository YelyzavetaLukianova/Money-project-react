import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import s from './BackHomeButton.module.css';

export default function BackHomeButton() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <NavLink to="/expense">
      <div className={s.wrapper}>
        <span className={s.back_symbol}>&#8592;</span>
        {isDesktop && <p className={s.text}>Вернуться на главную</p>}
      </div>
    </NavLink>
  );
}
