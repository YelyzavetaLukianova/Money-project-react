import FormEnter from '../FormEnter/FormEnter';
// import s from './Income.module.css';
import s from '../Expense/Expense.module.css';

const Income = () => {
  return (
    <div className={s.table}>
      <FormEnter />
    </div>
  );
};

export default Income;
