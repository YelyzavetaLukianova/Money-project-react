import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  getMonthlyIncome,
  getMonthlyExpense,
} from '../../../redux/currentPeriod/currentPeriod-selectors';
import CategoryList from '../CategoryList/CategoryList';

import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import s from './SumCategoryInfo.module.css';

const SumCategoryInfo = () => {
  const [typeTrans, setTypeTrans] = useState('expenses');

  const monthlyIncome = useSelector(getMonthlyIncome);
  const categoryIncome = Object.entries(monthlyIncome);

  const monthlyExpense = useSelector(getMonthlyExpense);
  const categoryExpense = Object.entries(monthlyExpense);

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
          <CategoryList category={categoryExpense} />
        ) : (
          <CategoryList category={categoryIncome} />
        )}
      </div>
    </section>
  );
};
export default SumCategoryInfo;
