import { Link, NavLink } from 'react-router-dom';
import Container from '../../common/Container';
import Section from '../../common/Section';
import Charts from '../../components/Charts/Chart';
import style from './ReportPage.module.css';

const ReportPage = () => {
  return (
    <Section>
      <Container>
        <NavLink to="/expence">Вернуться на главную</NavLink>

        <Charts />
      </Container>
    </Section>
  );
};

export default ReportPage;
