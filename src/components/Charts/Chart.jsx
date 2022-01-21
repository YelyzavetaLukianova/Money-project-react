// import { useSelector } from 'react-redux';
import s from './Chart.module.css';

// import {
//   getMonthlyIncome,
//   getMonthlyExpense,
// } from '../../redux/currentPeriod/currentPeriod-selectors';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Paper from '@mui/material/Paper';

// const data = [
//   {
//     name: 'Свинина',
//     expense: 5000,
//   },
//   {
//     name: 'Говядина',
//     expense: 4500,
//   },
// ];
// name: 'meal',
//   number: 1,

const Charts = ({ expenses, incomes, categoryState, typeTr }) => {
  console.log(`typeTr`, typeTr);
  const expensesStepOne = Object.entries(expenses);
  const expensesStepTwo = expensesStepOne.filter(
    item => item[0] === categoryState,
  );
  const expensesStepThree = expensesStepTwo.map(item => item[1]);
  const expensesStepFour = expensesStepThree.map(({ total, ...rest }) => ({
    ...rest,
  }));
  const expensesStepFive = expensesStepFour.map(item => {
    const entries = Object.entries(item);
    return entries.map(entry => ({ name: entry[0], number: entry[1] }));
  });
  const expensesFinish = expensesStepFive[0];
  ///

  const incomestepOne = Object.entries(incomes);
  const incomestepTwo = incomestepOne.filter(item => item[0] === categoryState);
  const incomestepThree = incomestepTwo.map(item => item[1]);
  const incomestepFour = incomestepThree.map(({ total, ...rest }) => ({
    ...rest,
  }));
  const incomestepFive = incomestepFour.map(item => {
    const entries = Object.entries(item);
    return entries.map(entry => ({ name: entry[0], number: entry[1] }));
  });
  const incomesFinish = incomestepFive[0];

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
            <Bar dataKey="number" fill="#FF751D" barSize={38} />
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
            // right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="number" fill="#FF751D" barSize={38} />
        </BarChart>
      </div>
    </>
  );
};
// }
export default Charts;
