import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPeriodData } from '../../../redux/currentPeriod/currentPeriod-operation';
import {
  goBackOneMonth,
  goForwardOneMonth,
} from '../../../redux/currentPeriod/currentPeriod-slice';
// import { periodSelectors } from '../../../redux/currentPeriod';
import {
  getMonth,
  getYear,
} from '../../../redux/currentPeriod/currentPeriod-selectors';

import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import s from './CurrentPeriod.module.css';

export default function CurrentPeriod() {
  const dispatch = useDispatch();
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

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

  const onClickLeft = () => {
    dispatch(goBackOneMonth());
  };

  const onClickRight = () => {
    dispatch(goForwardOneMonth());
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
        </span>
        <ArrowRightIcon className={s.icon} onClick={onClickRight} />
      </div>
    </div>
  );
}
