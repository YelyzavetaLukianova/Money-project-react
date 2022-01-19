import { Link, NavLink } from 'react-router-dom';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Charts from '../../components/Charts/Chart';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import style from './ReportPage.module.css';

const ReportPage = () => {
  return (
    <Section>
      <Container>
        <NavLink to="/expence">Вернуться на главную</NavLink>
        <ExpensesIncome />
        <Charts />
      </Container>
    </Section>
  );
};

export default ReportPage;
