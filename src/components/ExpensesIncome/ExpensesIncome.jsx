import { useEffect } from 'react';
import s from './ExpensesIncome.module.css';
import SumCategoryInfo from './SumCategoryInfo/SumCategoryInfo';
import { getTransactionPeriodData } from '../../services/kapusta-api';

export default function ExpensesIncome() {
  useEffect(() => {
    const getPeriodData = async () => {
      const { data } = await getTransactionPeriodData();
      console.log('data', data);
    };
    getPeriodData();
  }, []);

  return (
    <section className={s.sectionExpInc}>
      <div className={s.containerExpInc}>
        <div className={s.containerExp}>
          <p className={s.text}>Расходы:</p>
          <span className={s.expenses}>{}грн.</span>
        </div>
        <div className={s.containerInc}>
          <p className={s.text}>Доходы:</p>
          <span className={s.incomes}>{}грн.</span>
        </div>
      </div>
      <SumCategoryInfo />
    </section>
  );
}
