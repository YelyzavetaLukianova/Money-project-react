import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Paper from '@mui/material/Paper';
import s from './Chart.module.css';

const Charts = ({ expenses, incomes, categoryState, typeTr }) => {
  const expensesStepOne = Object.entries(expenses)
    .filter(item => item[0] === categoryState)
    .map(item => item[1])
    .map(({ total, ...rest }) => ({
      ...rest,
    }))
    .map(item => {
      const entries = Object.entries(item);
      return entries.map(entry => ({ name: entry[0], сумма: entry[1] }));
    });
  const expensesFinish = expensesStepOne[0]?.sort((a, b) => b.сумма - a.сумма);

  ///

  const incomeResults = Object.entries(incomes)
    .filter(item => item[0] === categoryState)
    .map(item => item[1])
    .map(({ total, ...rest }) => ({
      ...rest,
    }))
    .map(item => {
      const entries = Object.entries(item);
      return entries.map(entry => ({ name: entry[0], сумма: entry[1] }));
    });
  const incomesFinish = incomeResults[0]?.sort((a, b) => b.сумма - a.сумма);

  const data = typeTr === 'expenses' ? expensesFinish : incomesFinish;

  return (
    <>
      <div className={s.wrap}>
        <Paper className={s.pap} elevation={1}>
          <BarChart
            className={s.chart}
            width={620}
            height={328}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="сумма" fill="#FF751D" barSize={38} />
          </BarChart>
        </Paper>
      </div>
      <div className={s.line}></div>
      <div className={s.wrapMob}>
        <BarChart
          layout="vertical"
          className={s.chart}
          width={270}
          height={485}
          data={data}
          margin={{
            top: 5,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="сумма" fill="#FF751D" barSize={38} />
        </BarChart>
      </div>
    </>
  );
};

export default Charts;
