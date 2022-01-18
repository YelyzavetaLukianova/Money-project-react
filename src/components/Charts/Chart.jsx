import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from 'recharts';
import Paper from '@mui/material/Paper';
// import s from './Chart.module.css';

const data = [
  {
    name: 'Свинина',
    expense: 5000,
  },
  {
    name: 'Говядина',
    expense: 4500,
  },
  {
    name: 'Курица',
    expense: 3200,
  },
  {
    name: 'Рыба',
    expense: 2100,
  },
  {
    name: 'Панини',
    expense: 1800,
  },
  {
    name: 'Кофе',
    expense: 1700,
  },
  {
    name: 'Спагетти',
    expense: 1500,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

  render() {
    return (
      // <ResponsiveContainer className={s.rechartsresponsivecontainer}>
      <Paper
        sx={{ width: 800, margin: '20px auto', padding: '20px 0' }}
        elevation={1}
      >
        <BarChart
          width={758}
          height={422}
          data={data}
          margin={{
            top: 5,
            // right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          {/* <YAxis dataKey="name" /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#FF751D" barSize={38} />
        </BarChart>
      </Paper>
      // </ResponsiveContainer>
    );
  }
}

// import { ResponsiveBar } from '@nivo/bar';
// import { useBreakpoint } from 'react-use-size';

// import s from './Chart.module.css';

// function ReportChart({ arrTransactionsOfMonth, activeCategoryOfTransactions }) {
//   let dataForChart = [];
//   const isSmall = useBreakpoint(768);
//   const sum = 'Сумма';
//   const subCategory = 'Подкатегория';
//   const findCategoryEqualToActive = arrTransactionsOfMonth.find(
//     item => item[0] === activeCategoryOfTransactions,
//   );

//   if (findCategoryEqualToActive) {
//     dataForChart = Object.entries(findCategoryEqualToActive[1])
//       .map(([subCategoryFromArr, sumFromArr]) => {
//         return {
//           [subCategory]: subCategoryFromArr,
//           [sum]: sumFromArr,
//         };
//       })
//       .filter(item => item[subCategory] !== 'total')
//       .sort((a, b) => {
//         if (!isSmall) {
//           return b[sum] - a[sum];
//         } else {
//           return a[sum] - b[sum];
//         }
//       });
//   }

//   if (!dataForChart) dataForChart = [];

//   return (
//     <section className={s.container}>
//       {!!dataForChart.length && (
//         <ResponsiveBar
//           data={dataForChart}
//           keys={isSmall ? [sum] : [sum]}
//           indexBy={isSmall ? [subCategory] : [subCategory]}
//           margin={
//             isSmall
//               ? { top: 20, right: 35, bottom: 50, left: 80 }
//               : { top: 100, right: 100, bottom: 100, left: 100 }
//           }
//           padding={0.8}
//           valueScale={{ type: 'linear' }}
//           layout={isSmall ? 'horizontal' : 'vertical'}
//           colors="#ff751d"
//           animate={true}
//           enableGridX={true}
//           labelSkipWidth={15}
//           labelSkipHeight={10}
//           enableLabel={isSmall ? true : false}
//           axisTop={null}
//           axisRight={null}
//           axisLeft={
//             isSmall
//               ? {
//                   tickSize: 0,
//                   tickPadding: 10,
//                   tickRotation: 0,
//                   legend: '',
//                   legendPosition: 'middle',
//                   legendOffset: -50,
//                 }
//               : {
//                   tickSize: 0,
//                   tickPadding: 5,
//                   tickRotation: 0,
//                   legend: 'Сумма',
//                   legendPosition: 'middle',
//                   legendOffset: -50,
//                 }
//           }
//           axisBottom={
//             isSmall
//               ? {
//                   tickSize: 0,
//                   tickPadding: 5,
//                   tickRotation: -45,
//                   legend: 'Сумма',
//                   legendPosition: 'middle',
//                   legendOffset: 42,
//                 }
//               : {
//                   tickSize: 0,
//                   tickPadding: 5,
//                   tickRotation: -45,
//                   legend: '',
//                   legendPosition: 'middle',
//                   legendOffset: 42,
//                 }
//           }
//         />
//       )}
//       {!dataForChart.length && <p className={s.noData}>Нет данных</p>}
//     </section>
//   );
// }

// export default ReportChart;
