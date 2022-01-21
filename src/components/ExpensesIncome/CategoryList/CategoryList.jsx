import s from './CategoryList.module.css';
import { categories, incomes } from '../categoryList';
import sprite from '../../../images/svg/sprite.svg';

const CategoryList = ({ category, onClick }) => {
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
          <li className={s.categoryItem} key={item.category}>
            <button
              className={s.btn}
              onClick={() => onClick(item[0])}
              type="button"
            >
              <p className={s.categoryPrice}>{item[1].total}.00</p>
              <svg className={s.categoryIcon}>
                {/* <use href={`${sprite}#${item.category}`} /> */}
                <use href={categories[index].svg} />
              </svg>
              <h3 className={s.categoryPrice}>{item[0]}</h3>
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
export default CategoryList;
