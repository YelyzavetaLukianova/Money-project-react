import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderCostsIncome.module.css';

const HeaderCostsIncome = () => {
  return (
    <div className={s.header}>
      <NavLink
        to="/expense"
        className={s.link}
        activeClassName={s.active}
        exact
      >
        РАСХОД
      </NavLink>
      <NavLink to="/income" className={s.link} activeClassName={s.active} exact>
        ДОХОД
      </NavLink>
    </div>
  );
};

export default HeaderCostsIncome;
