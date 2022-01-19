import { useEffect, useState } from 'react';
import s from './ExpensesIncome.module.css';
import SumCategoryInfo from './SumCategoryInfo/SumCategoryInfo';
import { getTransactionPeriodData } from '../../services/kapusta-api';

const ExpensesIncome = () => {
  const [expenseTotal, setExpensesTotal] = useState(null);
  const [incomeTotal, setIncomeTotal] = useState(null);

  useEffect(() => {
    const getPeriodData = async () => {
      const { data } = await getTransactionPeriodData('2022-01');
      setExpensesTotal(data.expenses.expenseTotal);
      setIncomeTotal(data.incomes.incomeTotal);
      console.log('data', data.incomes);
      console.log('data', data.expenses);
    };
    getPeriodData();
  }, []);
  // console.log(`expensesTotal`, expenseTotal);
  // console.log(`incomeTotal`, incomeTotal);

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
