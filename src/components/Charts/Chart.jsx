// import React, { PureComponent } from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   // ResponsiveContainer,
// } from 'recharts';
// import Paper from '@mui/material/Paper';
// // import s from './Chart.module.css';

// const data = [
//   {
//     name: 'Свинина',
//     expense: 5000,
//   },
//   {
//     name: 'Говядина',
//     expense: 4500,
//   },
//   {
//     name: 'Курица',
//     expense: 3200,
//   },
//   {
//     name: 'Рыба',
//     expense: 2100,
//   },
//   {
//     name: 'Панини',
//     expense: 1800,
//   },
//   {
//     name: 'Кофе',
//     expense: 1700,
//   },
//   {
//     name: 'Спагетти',
//     expense: 1500,
//   },
// ];

// export default class Charts extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

//   render() {
//     return (
//       // <ResponsiveContainer className={s.rechartsresponsivecontainer}>
// <Paper
//   sx={{ width: 800, margin: '20px auto', padding: '20px 0' }}
//   elevation={1}
// >
//         <BarChart
// width={758}
// height={422}
//           data={data}
//           margin={{
//             top: 5,
//             // right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid />
//           <XAxis dataKey="name" />
//           {/* <YAxis dataKey="name" /> */}
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="expense" fill="#FF751D" barSize={38} />
//         </BarChart>
//       </Paper>
//       // </ResponsiveContainer>
//     );
//   }
// }

import Chart from 'react-apexcharts';
import { Component } from 'react';
import Paper from '@mui/material/Paper';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [
            'Свинина',
            'Говядина',
            'Курица',
            'Рыба',
            'Панини',
            'Кофе',
            'Спагетти',
          ],
        },
      },
      series: [
        {
          name: 'сумма в грн.',
          data: [5000, 4500, 3200, 2100, 1800, 1700, 1500],
        },
      ],
    };
  }
  render() {
    return (
      <Paper
        sx={{ width: 800, margin: '20px auto', padding: '20px 0' }}
        elevation={1}
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={758}
          height={422}
        />
      </Paper>
    );
  }
}
export default Charts;
