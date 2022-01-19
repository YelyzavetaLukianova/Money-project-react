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
// import getPeriodData from '../../../redux/currentPeriod/reports-slise';

const SumCategoryInfo = () => {
  // const [expensesData, setExpensesData] = useState(null);
  // const [incomesData, setIncomesData] = useState(null);
  const dispatch = useDispatch();
  const [typeTrans, setTypeTrans] = useState('expenses');

  const month = useSelector(periodSelectors.getMonth);
  const year = useSelector(periodSelectors.getYear);

  // const { data } = getTransactionPeriodData('2022-01');
  // console.log(data);

  // useEffect(() => {
  //   const getPeriodData = async () => {
  //     const { data } = await getTransactionPeriodData('2022-01');
  //     setExpensesData(data.expenses.expensesData);
  //     setIncomesData(data.incomes.incomesData);
  //     console.log('datagggg', data.incomes);
  //     // console.log('data', data.expenses);
  //   };
  //   getPeriodData();
  // }, []);

  const handleClick = () => {
    if (typeTrans === 'incomes') {
      setTypeTrans('expenses');
      dispatch(addCurrentType('expenses'));
      // dispatch(addCurrentCategory('Продукты'));
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomes');
      dispatch(addCurrentType('incomes'));
      // dispatch(addCurrentCategory('ЗП'));
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
        <CategoryList />

        {/* {typeTrans === 'expenses' ? (
          <CategoryList trans={data?.data.expenses} />
        ) : (
          <CategoryList trans={data?.data.incomes} />
        )} */}
      </div>
    </>
  );
};
export default SumCategoryInfo;
