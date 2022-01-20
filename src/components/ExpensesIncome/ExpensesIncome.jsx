import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './ExpensesIncome.module.css';
import SumCategoryInfo from './SumCategoryInfo/SumCategoryInfo';
import { getTransactionPeriodData } from '../../services/kapusta-api';
import { getPeriodData } from '../../redux/currentPeriod/currentPeriod-operation';
import {
  getExpensesTotal,
  getIncomesTotal,
} from '../../redux/currentPeriod/currentPeriod-selectors';

const ExpensesIncome = () => {
  const dispatch = useDispatch();
  const expenseTotal = useSelector(getExpensesTotal);
  const incomeTotal = useSelector(getIncomesTotal);

  // useEffect(() => {
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   dispatch(getPeriodData(`${year}-${month.toString().padStart(2, 0)}`));
  //   console.log('date', `${year}-${month.toString().padStart(2, 0)}`);
  // }, [dispatch]);

  return (
    <section className={s.sectionExpInc}>
      <div className={s.containerExpInc}>
        <div className={s.containerExp}>
          <p className={s.text}>Расходы:</p>
          <span className={s.expenses}>{expenseTotal}грн.</span>
        </div>
        <div className={s.containerInc}>
          <p className={s.text}>Доходы:</p>
          <span className={s.incomes}>{incomeTotal}грн.</span>
        </div>
      </div>
      <SumCategoryInfo />
    </section>
  );
};
export default ExpensesIncome;
