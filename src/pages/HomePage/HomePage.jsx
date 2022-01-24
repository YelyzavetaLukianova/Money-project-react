// import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderCostsIncome from '../../components/HeaderCostsIncome/HeaderCostsIncome';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Expense from '../../components/Expense/Expense';
import Income from '../../components/Income/Income';
import ReportButton from '../../components/Balance/ReportButton';
import BalanceForm from '../../components/Balance/BalanceForm/BalanceForm';
import BalanceFormContainer from '../../common/BalanceFormContainer';
import { routes } from '../../routes';
import style from './HomePage.module.css';

const { EXPENSE, INCOME } = routes;

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <Section>
      {isMobile && (
        <BalanceFormContainer>
          <ReportButton />
          <BalanceForm btnCheker="true" />
        </BalanceFormContainer>
      )}

      {isDesktop && (
        <BalanceFormContainer>
          <BalanceForm />
          <ReportButton />
        </BalanceFormContainer>
      )}

      <Container>
        {isDesktop && <HeaderCostsIncome />}
        <Switch>
          <Route exact path={EXPENSE}>
            <Expense />
          </Route>
          <Route exact path={INCOME}>
            <Income />
          </Route>
        </Switch>
      </Container>
    </Section>
  );
};

export default HomePage;
