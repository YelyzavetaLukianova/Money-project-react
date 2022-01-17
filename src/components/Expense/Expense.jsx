import FormEnter from '../FormEnter/FormEnter';

import s from './Expense.module.css';

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
