import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addCurrentCategory } from '../../../redux/currentPeriod/currentPeriod-slice';

import s from './CategoryList.module.css';
import { categoryList } from '../categoryList';
// import sprite from '../../../images/svg/sprite.svg';
import {
  getMonthlyIncome,
  getMonthlyExpense,
} from '../../../redux/currentPeriod/currentPeriod-selectors';
import { useSelector } from 'react-redux';

const CategoryList = ({ category }) => {
  // const monthlyIncome = useSelector(getMonthlyIncome);
  // const categoryIncome = Object.entries(monthlyIncome);
  // console.log('categoryIncome', categoryIncome);

  // const monthlyExpense = useSelector(getMonthlyExpense);
  // const categoryExpense = Object.entries(monthlyExpense);

  return (
    // <ul className={s.categoryList}>
    //   {categoryExpense?.length === 0 ? (
    //     <li className={s.transEmpty}>За данный период транзакций нет</li>
    //   ) : (
    //     categoryExpense.map(item => (
    //       <li className={s.categoryItem} key={item[0]}>
    //         <p className={s.categoryPrice}>{item[1].total}</p>
    //         {/* <img className={s.categoryIcon} src={images} alt={category} /> */}
    //         <h3 className={s.categoryPrice}>{item[0]}</h3>
    //       </li>
    //     ))
    //   )}
    // </ul>
    <ul className={s.categoryList}>
      {category?.length === 0 ? (
        <li className={s.transEmpty}>За данный период транзакций нет</li>
      ) : (
        category.map(item => (
          <li className={s.categoryItem} key={item[0]}>
            <p className={s.categoryPrice}>{item[1].total}</p>
            {/* <img className={s.categoryIcon} src={images} alt={category} /> */}
            <h3 className={s.categoryPrice}>{item[0]}</h3>
          </li>
        ))
      )}
    </ul>

    // <ul className={s.categoryList}>
    //   {categoryList.map(({ category, images }) => {
    //     return (
    //       <li key={category} className={s.categoryItem}>
    //         <img className={s.categoryIcon} src={images} alt={category} />
    //         <p className={s.categoryPrice}>{category}</p>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};
export default CategoryList;
