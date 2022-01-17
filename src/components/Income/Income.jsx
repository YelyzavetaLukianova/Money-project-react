import { useState } from 'react';
import { GrCalculator } from 'react-icons/gr';

import Summary from '../Summary/Summary';
import Button from '../../common/Button/Button';
import CashFlow from '../CashFlow/CashFlow';
import { nanoid } from 'nanoid';

import s from './Income.module.css';

const classsLeft = s.input + ' ' + s.left_input;
const classsRight = s.input + ' ' + s.right_input;
const classsDate = s.input + ' ' + s.date_input;

const categoryOptions = [
  {
    label: 'Категория товара*',
    value: '',
  },

  {
    label: 'ЗП',
    value: 'ЗП',
  },
  {
    label: 'Доп.доход',
    value: 'Доп.доход',
  },
];

const INITIAL_STATE = {
  date: '',
  name: '',
  category: '',
  amount: '',
};
const Income = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [costs, setCosts] = useState([]);

  console.log(`costs`, costs);

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
    setCosts([...costs, formData]);
    reset();
  };
  const onClicReset = () => {
    reset();
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };
  return (
    <div>
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
                {categoryOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
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
        <div className={s.table}>
          <CashFlow arey={costs} />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Income;
