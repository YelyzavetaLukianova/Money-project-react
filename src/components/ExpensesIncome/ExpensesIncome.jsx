import React from 'react';
import s from './ExpensesIncome.module.css';
import SumCategoryInfo from './SumCategoryInfo/SumCategoryInfo';

export default function ExpensesIncome() {
  return (
    <section className={s.sectionExpInc}>
      <div className={s.containerExpInc}>
        <div className={s.containerExp}>
          <p className={s.text}>Расходы:</p>
          <span className={s.expenses}>грн.</span>
        </div>
        <div className={s.containerInc}>
          <p className={s.text}>Доходы:</p>
          <span className={s.incomes}>грн.</span>
        </div>
      </div>
      <SumCategoryInfo />
    </section>
  );
}
