import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  goBackOneMonth,
  goForwardOneMonth,
} from '../../../redux/currentPeriod/currentPeriod-slice';
import { periodSelectors } from '../../../redux/currentPeriod';
import s from './CurrentPeriod.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import { getPeriodData } from '../../../redux/currentPeriod/currentPeriod-operation';
export default function CurrentPeriod() {
  const dispatch = useDispatch();
  const month = useSelector(periodSelectors.getMonth);
  const year = useSelector(periodSelectors.getYear);

  const months = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
  };

  // клик влево
  const onClickLeft = () => {
    dispatch(goBackOneMonth());
    // dispatch(getPeriodData(`${year}-${month.toString().padStart(2, 0)}`));
  };
  // клик вправо
  const onClickRight = () => {
    dispatch(goForwardOneMonth());
    // dispatch(getPeriodData(`${year}-${month.toString().padStart(2, 0)}`));
  };

  useEffect(() => {
    dispatch(getPeriodData(`${year}-${month.toString().padStart(2, 0)}`));
  }, [dispatch, month, year]);

  return (
    <div className={s.container}>
      <p className={s.period}>Текущий период:</p>
      <div className={s.wrapper}>
        <ArrowLeftIcon className={s.icon} onClick={onClickLeft} />
        <span className={s.data}>
          {months[month]} {year}
          {/* ноябрь 2019 */}
        </span>
        <ArrowRightIcon className={s.icon} onClick={onClickRight} />
      </div>
    </div>
  );
}
