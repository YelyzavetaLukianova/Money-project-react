// import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 481px)' });
  return (
    <Section>
      {isMobile && (
        <BalanceFormContainer>
          <BackHomeButton />
          <CurrentPeriod />
          <BalanceForm />
        </BalanceFormContainer>
      )}

      {isDesktop && (
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
