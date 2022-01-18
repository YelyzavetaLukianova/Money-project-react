// import { useDispatch } from 'react-redux';
// import { addCurrentCategory } from '../../../redux/currentPeriod/currentPeriod-slice';

import s from './CategoryList.module.css';
// import sprite from '../../../images/svg/sprite.svg';

export default function CategoryList() {
  // const dispatch = useDispatch();

  // const handleClick = category => {
  //   dispatch(addCurrentCategory(category));
  // };

  return (
    <ul className={s.categoryList}>
      <li className={s.categoryItem}>
        <p className={s.categoryPrice}>5000</p>
        <svg className={s.categoryIcon}>
          {/* <use xlinkHref="sprite.svg#icon-products" /> */}
          {/* <use xlinkHref={`${sprite}#${item.category}`} /> */}
          {/* <use href="../../../images/svg/sprite.svg#icon-products"></use> */}
        </svg>
        <h3 className={s.categoryPrice}>Продукты</h3>
      </li>
    </ul>
  );
}
