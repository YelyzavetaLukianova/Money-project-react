import BalanceForm from './BalanceForm/BalanceForm';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import BackHomeButton from './BackHomeButton/BackHomeButton';

import s from './Balance.module.css';

export default function Balance() {
  return (
    <div className={s.balanseContainer}>
      <BackHomeButton />
      <BalanceForm />
      <CurrentPeriod />
    </div>
  );
}
