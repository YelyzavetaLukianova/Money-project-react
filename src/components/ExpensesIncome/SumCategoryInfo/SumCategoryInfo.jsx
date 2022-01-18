import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { periodSelectors } from '../../../redux/currentPeriod';
import {
  addCurrentType,
  addCurrentCategory,
} from '../../../redux/currentPeriod/currentPeriod-slice';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import CategoryList from '../CategoryList/CategoryList';
import s from './SumCategoryInfo.module.css';

// import getPeriodData from '../../../redux/currentPeriod/reports-slise';

export default function SumCategoryInfo() {
  const dispatch = useDispatch();
  const [typeTrans, setTypeTrans] = useState('expenses');

  const month = useSelector(periodSelectors.getMonth);
  const year = useSelector(periodSelectors.getYear);
  console.log();
  // const { data } = getPeriodData({ year, month });

  const handleClick = () => {
    if (typeTrans === 'incomings') {
      setTypeTrans('expenses');
      dispatch(addCurrentType('expenses'));
      dispatch(addCurrentCategory('Продукты'));
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomings');
      dispatch(addCurrentType('incomings'));
      dispatch(addCurrentCategory('ЗП'));
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
          <CategoryList trans={data?.data.incomings} />
        )} */}
      </div>
    </>
  );
}
