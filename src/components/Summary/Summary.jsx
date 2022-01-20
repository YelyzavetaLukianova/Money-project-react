import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getIncome, getExpense } from '../../services/kapusta-api';

import s from './Summary.module.css';

const Summary = () => {
  const [incomMonths, setIncomMonths] = useState({});
  const [expenseMonths, setExpenseMonths] = useState({});

  const location = useLocation();

  const incom = Object.entries(incomMonths);
  const expense = Object.entries(expenseMonths);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getIncome();

      setIncomMonths({ ...data.monthsStats });
    };
    getData();
  }, []);

  useEffect(() => {
    const getDataExpense = async () => {
      const { data } = await getExpense();

      setExpenseMonths({ ...data.monthsStats });
    };
    getDataExpense();
  }, []);

  return (
    <div className={s.summary}>
      <h2 className={s.title}>Сводка</h2>

      {(location.pathname === '/income' ? incom : expense).map(item => (
        <div key={item[0]} className={s.rows}>
          <p>{item[0]}</p>
          <p>{item[1] === 'N/A' ? 'Нет данных' : item[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
