import React from 'react';

import s from './Summary.module.css';

const data = [
  {
    month: 'январь',
    cost: 250,
  },
  {
    month: 'февраль',
    cost: 138,
  },
  {
    month: 'март',
    cost: 138,
  },
];

const Summary = () => {
  return (
    <div className={s.summary}>
      <h2 className={s.title}>Сводка</h2>

      {data.map(({ month, cost }) => (
        <div key={month} className={s.rows}>
          <p>{month}</p>
          <p>{cost}</p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
