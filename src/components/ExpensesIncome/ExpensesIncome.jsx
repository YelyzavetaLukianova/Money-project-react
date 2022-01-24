import { useSelector } from 'react-redux';
import {
  getExpensesTotal,
  getIncomesTotal,
} from '../../redux/currentPeriod/currentPeriodSelectors';
import SumCategoryInfo from './SumCategoryInfo/SumCategoryInfo';

import s from './ExpensesIncome.module.css';

const ExpensesIncome = () => {
  const expenseTotal = useSelector(getExpensesTotal);
  const incomeTotal = useSelector(getIncomesTotal);

  return (
    <>
      <div className={s.containerExpInc}>
        <div className={s.containerExp}>
          <p className={s.text}>Расходы:</p>
          <span className={s.expenses}>- {expenseTotal} грн.</span>
        </div>
        <div className={s.containerInc}>
          <p className={s.text}>Доходы:</p>
          <span className={s.incomes}>+ {incomeTotal} грн.</span>
        </div>
      </div>
      <SumCategoryInfo />
    </>
  );
};
export default ExpensesIncome;
