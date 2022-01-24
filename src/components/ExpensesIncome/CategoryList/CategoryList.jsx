import s from './CategoryList.module.css';
import sprite from '../../../images/svg/sprite.svg';

const CategoryList = ({ category, onClick }) => {
  return (
    <ul className={s.categoryList}>
      {category.length === 0 ? (
        <li className={s.categoryListEmpty}>За данный период транзакций нет</li>
      ) : (
        category.map(item => (
          <li className={s.categoryItem} key={item[0]}>
            <p className={s.categoryPrice}>{item[1].total}.00</p>
            <button
              className={s.buttonCategoryIcon}
              onClick={() => onClick(item[0])}
              type="button"
            >
              <svg className={s.categoryIcon}>
                <use xlinkHref={`${sprite}#${item[0]}`} />
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
