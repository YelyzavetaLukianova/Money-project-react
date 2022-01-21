import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  getMonthlyIncome,
  getMonthlyExpense,
} from '../../../redux/currentPeriod/currentPeriod-selectors';
import CategoryList from '../CategoryList/CategoryList';
import Charts from '../../Charts/Chart';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import s from './SumCategoryInfo.module.css';

const SumCategoryInfo = () => {
  const [typeTrans, setTypeTrans] = useState('expenses');
  const [categoryState, setCategoryState] = useState('');
  const monthlyIncome = useSelector(getMonthlyIncome);
  const categoryIncome = Object.entries(monthlyIncome);

  const monthlyExpense = useSelector(getMonthlyExpense);
  // console.log(`monthlyExpense`, Object.values(monthlyExpense));
  const categoryExpense = Object.entries(monthlyExpense);

  const catChart = category => {
    setCategoryState(category);
  };
  const handleClick = () => {
    if (typeTrans === 'incomes') {
      setTypeTrans('expenses');
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomes');
    }
  };

  return (
    <section className={s.sectionSCI}>
      <div className={s.SumCategoryInfo}>
        <ArrowLeftIcon className={s.iconSCI} onClick={() => handleClick()} />
        {typeTrans === 'expenses' ? (
          <p className={s.SCItitle}>Расходы</p>
        ) : (
          <p className={s.SCItitle}>Доходы</p>
        )}
        <ArrowRightIcon className={s.iconSCI} onClick={() => handleClick()} />
      </div>
      <div className={s.categoryContainer}>
        {typeTrans === 'expenses' ? (
          <CategoryList onClick={catChart} category={categoryExpense} />
        ) : (
          <CategoryList onClick={catChart} category={categoryIncome} />
        )}
      </div>
      {categoryState && (
        <Charts
          typeTr={typeTrans === 'expenses' ? 'expenses' : 'incomes'}
          categoryState={categoryState}
          expenses={monthlyExpense}
          incomes={monthlyIncome}
        />
      )}
    </section>
  );
};
export default SumCategoryInfo;
