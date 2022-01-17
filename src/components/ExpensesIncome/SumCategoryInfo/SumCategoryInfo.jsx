// import { useState } from 'react';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import CategoryList from '../CategoryList/CategoryList';
import s from './SumCategoryInfo.module.css';

export default function SumCategoryInfo() {
  //   const [typeTrans, setTypeTrans] = useState('expenses');

  return (
    <>
      <div className={s.SumCategoryInfo}>
        <ArrowLeftIcon />
        {/* {typeTrans === 'expenses' ? ( */}
        <p className={s.SCItitle}>Расходы</p>
        {/* ) : ( */}
        {/* <p className={s.title}>Доходы</p> */}
        {/* )} */}
        <ArrowRightIcon />
      </div>
      <div className={s.categoryContainer}>
        <CategoryList />
      </div>
    </>
  );
}
