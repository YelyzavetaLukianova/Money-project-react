import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getIncome, getExpense } from '../../services/kapustaApi';
import { getExpenses } from '../../redux/transaction/expense/transactionSelectors';
import { getIncomes } from '../../redux/transaction/incom/transactionIncomeSelectors.js';

import s from './Summary.module.css';

// const months = [
//   ['01', 'ЯНВАРЬ'],
//   ['02', 'ФЕВРАЛЬ'],
//   ['03', 'МАРТ'],
//   ['04', 'АПРЕЛЬ'],
//   ['05', 'МАЙ'],
//   ['06', 'ИЮНЬ'],
//   ['07', 'ИЮЛЬ'],
//   ['08', 'АВГУСТ'],
//   ['09', 'СЕНТЯБРЬ'],
//   [10, 'ОКТЯБРЬ'],
//   [11, 'НОЯБРЬ'],
//   [12, 'ДЕКАБРЬ'],
// ];

const Summary = () => {
  const [incomMonths, setIncomMonths] = useState({});
  const [expenseMonths, setExpenseMonths] = useState({});

  const expenses = useSelector(getExpenses);
  const incomes = useSelector(getIncomes);

  const location = useLocation();

  const incom = Object.entries(incomMonths);
  const expense = Object.entries(expenseMonths);

  const isIncome = location.pathname === '/income';

  // const date = new Date('December 17, 1995');

  // const dateMonth = (date.getMonth() + 1).toString().padStart(2, 0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getIncome();

      setIncomMonths({ ...data.monthsStats });
    };
    getData();
  }, [incomes]);

  useEffect(() => {
    const getDataExpense = async () => {
      const { data } = await getExpense();

      setExpenseMonths({ ...data.monthsStats });
    };
    getDataExpense();
  }, [expenses]);

  return (
    <div className={s.summary}>
      <h2 className={s.title}>Сводка</h2>

      {(isIncome ? incom : expense).map(
        item =>
          item[1] !== 'N/A' && (
            <div key={item[0]} className={s.rows}>
              <p>{item[0]}</p>
              <p>{item[1] === 'N/A' ? 'Нет данных' : item[1]}</p>
            </div>
          ),
      )}
    </div>
  );
};

export default Summary;
