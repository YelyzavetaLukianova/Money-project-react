// import { Link, NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use-size';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Charts from '../../components/Charts/Chart';
import BackHomeButton from '../../components/Balance/BackHomeButton';
import CurrentPeriod from '../../components/Balance/CurrentPeriod/CurrentPeriod';
import BalanceForm from '../../components/Balance/BalanceForm/BalanceForm';
import BalanceFormContainer from '../../common/BalanceFormContainer';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import style from './ReportPage.module.css';

const ReportPage = () => {
  const { width } = useWindowSize();
  return (
    <Section>
      {width < 481 && (
        <BalanceFormContainer>
          <BackHomeButton />
          <CurrentPeriod />
          <BalanceForm />
        </BalanceFormContainer>
      )}

      {width > 480 && (
        <BalanceFormContainer>
          <BackHomeButton />
          <BalanceForm display_none="true" />
          <CurrentPeriod />
        </BalanceFormContainer>
      )}

      <Container>
        <ExpensesIncome />
        <Charts />
      </Container>
    </Section>
  );
};

export default ReportPage;
