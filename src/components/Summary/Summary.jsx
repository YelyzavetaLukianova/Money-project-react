import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getIncome, getExpense } from '../../services/kapustaApi';

import { getExpenseItems } from '../../redux/transaction/expense/transactionSelectors';

import { getIncomeItems } from '../../redux/transaction/incom/transactionIncomeSelectors';

// import { getExpenses } from '../../redux/transaction/expense/transactionSelectors';
// import { getIncomes } from '../../redux/transaction/incom/transactionIncomeSelectors.js';

import s from './Summary.module.css';

const Summary = () => {
  const [incomMonths, setIncomMonths] = useState({});
  const [expenseMonths, setExpenseMonths] = useState({});

  const expenses = useSelector(getExpenseItems);
  const incomes = useSelector(getIncomeItems);

  const location = useLocation();

  const incom = Object.entries(incomMonths);
  const expense = Object.entries(expenseMonths);

  const isIncome = location.pathname === '/income';

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
