// import { useSelector, useDispatch } from 'react-redux';
// import {
//   goBackOneMonth,
//   goForwardOneMonth,
// } from '../../../redux/currentPeriod/currentPeriod-slice';
// import { periodSelectors } from '../../../redux/currentPeriod';
import s from './CurrentPeriod.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';

export default function CurrentPeriod() {
  // const dispatch = useDispatch();
  // const month = useSelector(periodSelectors.getMonth);
  // const year = useSelector(periodSelectors.getYear);

  // const months = {
  //   1: 'январь',
  //   2: 'февраль',
  //   3: 'март',
  //   4: 'апрель',
  //   5: 'май',
  //   6: 'июнь',
  //   7: 'июль',
  //   8: 'август',
  //   9: 'сентябрь',
  //   10: 'октябрь',
  //   11: 'ноябрь',
  //   12: 'декабрь',
  // };

  // // клик влево
  // const onClickLeft = () => {
  //   dispatch(goBackOneMonth());
  // };
  // // клик вправо
  // const onClickRight = () => {
  //   dispatch(goForwardOneMonth());
  // };

  return (
    <div className={s.container}>
      <p className={s.period}>Текущий период:</p>
      <div className={s.wrapper}>
        <ArrowLeftIcon
          className={s.icon}
          // onClick={onClickLeft}
        />
        <span className={s.data}>
          {/* {months[month]} {year} */}
          ноябрь 2019
        </span>
        <ArrowRightIcon
          className={s.icon}
          // onClick={onClickRight}
        />
      </div>
    </div>
  );
}
