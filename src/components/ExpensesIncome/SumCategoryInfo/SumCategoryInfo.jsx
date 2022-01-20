import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { periodSelectors } from '../../../redux/currentPeriod';
import {
  addCurrentType,
  addCurrentCategory,
} from '../../../redux/currentPeriod/currentPeriod-slice';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import CategoryList from '../CategoryList/CategoryList';
import s from './SumCategoryInfo.module.css';
import { getTransactionPeriodData } from '../../../services/kapusta-api';
import {
  getMonthlyIncome,
  getMonthlyExpense,
} from '../../../redux/currentPeriod/currentPeriod-selectors';
// import getPeriodData from '../../../redux/currentPeriod/reports-slise';

const SumCategoryInfo = () => {
  // const [expensesData, setExpensesData] = useState(null);
  const [typeTrans, setTypeTrans] = useState('expenses');

  const monthlyIncome = useSelector(getMonthlyIncome);
  const categoryIncome = Object.entries(monthlyIncome);
  // console.log('categoryIncome', categoryIncome);
  const monthlyExpense = useSelector(getMonthlyExpense);
  const categoryExpense = Object.entries(monthlyExpense);
  console.log('categoryExpense', categoryExpense);

  const handleClick = () => {
    if (typeTrans === 'incomes') {
      setTypeTrans('expenses');
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomes');
    }
  };

  return (
    <>
      <div className={s.SumCategoryInfo}>
        <ArrowLeftIcon onClick={() => handleClick()} />
        {typeTrans === 'expenses' ? (
          <p className={s.SCItitle}>Расходы</p>
        ) : (
          <p className={s.SCItitle}>Доходы</p>
        )}
        <ArrowRightIcon onClick={() => handleClick()} />
      </div>
      <div className={s.categoryContainer}>
        {/* <CategoryList /> */}

        {typeTrans === 'expenses' ? (
          <CategoryList category={categoryExpense} />
        ) : (
          <CategoryList category={categoryIncome} />
        )}
      </div>
    </>
  );
};
export default SumCategoryInfo;
