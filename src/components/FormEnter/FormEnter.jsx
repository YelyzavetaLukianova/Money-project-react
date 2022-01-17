import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { GrCalculator } from 'react-icons/gr';

import Button from '../../common/Button/Button';
import { nanoid } from 'nanoid';
import s from './FormEnter.module.css';
import Summary from '../Summary/Summary';
import CashFlow from '../CashFlow/CashFlow';

import {
  getExpenseCategories,
  getIncomeCategories,
} from '../../services/kapusta-api';

const classsLeft = s.input + ' ' + s.left_input;
const classsRight = s.input + ' ' + s.right_input;
const classsDate = s.input + ' ' + s.date_input;

const INITIAL_STATE = {
  date: '',
  name: '',
  category: '',
  amount: '',
};

const FormEnter = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [categoryBack, setCategoryBack] = useState([]);
  const [categoryInc, setCategoryInc] = useState([]);

  console.log(`expense`, expense);
  console.log(`income`, income);

  const location = useLocation();

  useEffect(() => {
    const getDataExp = async () => {
      const { data } = await getExpenseCategories();

      setCategoryBack(['Категория товара', ...data]);
    };
    getDataExp();
  }, []);

  useEffect(() => {
    const getDataInc = async () => {
      const { data } = await getIncomeCategories();

      setCategoryInc(['Категория дохода', ...data]);
    };
    getDataInc();
  }, []);

  const { date, name, category, amount } = formData;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      id: nanoid(),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    location.pathname === '/income'
      ? setIncome([...income, formData])
      : setExpense([...expense, formData]);
    reset();
  };

  const onClicReset = () => {
    reset();
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };
  //     if (location.pathname === '/income') {
  //     const income =
  // }
  //     const income =
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit} className={s.form}>
          <div>
            <input
              type="date"
              name="date"
              value={date}
              required
              onChange={handleChange}
              className={classsDate}
            />

            <input
              type="text"
              name="name"
              value={name}
              placeholder="Описание товара"
              required
              onChange={handleChange}
              className={classsLeft}
            />

            <select
              name="category"
              value={category}
              onChange={handleChange}
              className={s.input}
            >
              {(location.pathname === '/income'
                ? categoryInc
                : categoryBack
              ).map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="amount"
              value={amount}
              placeholder="0,00"
              required
              onChange={handleChange}
              className={classsRight}
            />
            <GrCalculator className={s.icon} />
          </div>

          <div className={s.wrap}>
            <Button text="ВВОД" type="submit" className={s.btn} />

            <Button
              text=" ОЧИCТИТЬ"
              className={s.btnClean}
              onClick={onClicReset}
            />
          </div>
        </form>
      </div>
      <CashFlow arey={location.pathname === '/income' ? income : expense} />
      <Summary />
    </div>
  );
};

export default FormEnter;
