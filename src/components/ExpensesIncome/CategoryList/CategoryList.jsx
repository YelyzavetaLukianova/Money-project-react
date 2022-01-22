import s from './CategoryList.module.css';
import { categories, incomes } from '../categoryList';
import sprite from '../../../images/svg/sprite.svg';
import { useState } from 'react';

const CategoryList = ({ category, onClick }) => {
  // const [typeTrans, setTypeTrans] = useState('expenses');
  const [change, setChange] = useState(true);
  // useState
  return (
    <ul className={s.categoryList}>
      {category.length === 0 ? (
        <li className={s.categoryListEmpty}>За данный период транзакций нет</li>
      ) : (
        category.map((item, index) => (
          // <li className={s.categoryItem} key={index}>

          //   <p className={s.categoryPrice}>{item[1].total}.00</p>
          //   <svg viewBox="0 0 32 32" className={s.categoryIcon}>
          //     <use href={categories[index].svg} />
          //   </svg>
          //   <h3 className={s.categoryPrice}>{item[0]}</h3>

          // </li>
          // <li className={s.categoryItem} key={index}>
          //   <p className={s.categoryPrice}>{item[1].total}.00</p>
          //   {type === 'expenses' ? (
          //     <svg viewBox="0 0 32 32" className={s.categoryIcon}>
          //       <use href={categories[index].svg} />
          //     </svg>
          //   ) : (
          //     <svg viewBox="0 0 32 32" className={s.categoryIcon}>
          //       <use href={incomes[index].svg} />
          //     </svg>
          //   )}

          //   <h3 className={s.categoryPrice}>{item[0]}</h3>
          // </li>
          <li className={s.categoryItem} key={item[0]}>
            <p className={s.categoryPrice}>{item[1].total}.00</p>
            <button
              className={s.buttonCategoryIcon}
              onClick={() => onClick(item[0])}
              type="button"
            >
              <svg className={s.categoryIcon}>
                {/* <use href={`${sprite}#${item.category}`} /> */}
                <use href={categories[index].svg} />
              </svg>
            </button>
            <h3 className={s.categoryPrice}>{item[0]}</h3>
          </li>
        ))
      )}
    </ul>
  );
};
export default CategoryList;
