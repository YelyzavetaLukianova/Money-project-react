import FormEnter from '../FormEnter/FormEnter';
import { useMediaQuery } from 'react-responsive';
import s from './Expense.module.css';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

import { getExpenseCategories } from '../../services/kapusta-api';

const Expense = () => {
  return (
    <div>
      <div>
        <div className={s.table}>
          <FormEnter />
        </div>
      </div>
    </div>
  );
};

export default Expense;
