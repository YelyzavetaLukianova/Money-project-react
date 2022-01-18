// import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HeaderCostsIncome from '../../components/HeaderCostsIncome/HeaderCostsIncome';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Expense from '../../components/Expense/Expense';
import Income from '../../components/Income/Income';

import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <NavLink to="/report">Перейти к отчетам</NavLink>
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
