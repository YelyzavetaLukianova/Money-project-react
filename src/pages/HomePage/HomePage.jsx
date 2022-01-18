// import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use-size';
import HeaderCostsIncome from '../../components/HeaderCostsIncome/HeaderCostsIncome';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Expense from '../../components/Expense/Expense';
import Income from '../../components/Income/Income';
import ReportButton from '../../components/Balance/ReportButton';
import BalanceForm from '../../components/Balance/BalanceForm/BalanceForm';
import BalanceFormContainer from '../../common/BalanceFormContainer';

import style from './HomePage.module.css';

const HomePage = () => {
  const { width } = useWindowSize();
  return (
    <Section>
      {width < 481 && (
        <BalanceFormContainer>
          <ReportButton />
          <BalanceForm />
        </BalanceFormContainer>
      )}

      {width > 480 && (
        <BalanceFormContainer>
          <BalanceForm />
          <ReportButton />
        </BalanceFormContainer>
      )}

      <Container>
        <HeaderCostsIncome />
        <Switch>
          <Route exact path="/expense">
            <Expense />
          </Route>
          <Route exact path="/income">
            <Income />
          </Route>
        </Switch>
      </Container>
    </Section>
  );
};

export default HomePage;
