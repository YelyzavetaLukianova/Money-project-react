import BalanceForm from './BalanceForm/BalanceForm';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import BackHomeButton from './BackHomeButton/BackHomeButton';
import ReportButton from './ReportButton/ReportButton';
import { useWindowSize } from 'react-use-size';

// import s from './Balance.module.css';

export default function Balance() {
  const { width } = useWindowSize();

  // return (
  // <div className={s.balanseContainer}>
  //   <BackHomeButton />
  //   <BalanceForm />
  //   <CurrentPeriod />
  //   <ReportButton />

  // </div>

  <>
    {/* home */}

    {/* <>
        <ReportButton />
        <BalanceForm />
      </> */}

    {/* {width < 480 && (
        <>
          <BalanceForm />
          <ReportButton />
        </>
      )} */}

    {/* report */}
    {/* {width < 479 && (
        <>
          <CurrentPeriod />
          <BalanceForm />
        </> // без кнопки
      )} */}

    {/* {width > 480 && (
        <>
          <BackHomeButton />
          <BalanceForm />
          <CurrentPeriod />
          <ReportButton />
        </>
      )} */}
  </>;
  // );
}
