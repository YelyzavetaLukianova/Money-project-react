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
        Expense
      </NavLink>
      <NavLink to="/income" className={s.link} activeClassName={s.active} exact>
        Income
      </NavLink>
    </div>
  );
};

export default HeaderCostsIncome;
