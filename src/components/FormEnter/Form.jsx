import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { GrCalculator } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import calend from './calendar.png';

import {
  getExpenseBack,
  addExpenseBack,
} from '../../redux/transaction/expense/transactionOperations';

import {
  getIncomeBack,
  addIncomeBack,
} from '../../redux/transaction/incom/transactionIncomeOperations';

import {
  getExpenseCategories,
  getIncomeCategories,
} from '../../services/kapustaApi';

import Flatpickr from 'react-flatpickr';

import Button from '../../common/Button/Button';

import s from '../FormEnter/FormEnter.module.css';

const classsLeft = s.input + ' ' + s.left_input;
const classsRight = s.input + ' ' + s.right_input;

<ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;

const INITIAL_STATE = {
  date: '',
  description: '',
  category: '',
  amount: '',
};

const date = new Date();
const year = date.getFullYear().toString();
const month = (date.getMonth() + 1).toString().padStart(2, 0);
const day = date.getDate().toString().padStart(2, 0);
const newDate = `${year}-${month}-${day}`;

const Form = ({ onCloseForm }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [selectedDate, setSelectedDate] = useState(newDate);

  const [categoryBack, setCategoryBack] = useState([]);
  const [categoryInc, setCategoryInc] = useState([]);
  const initialBalance = useSelector(state => state.balance.balance);

  const location = useLocation();

  const isIncome = location.pathname === '/income';

  useEffect(() => {
    isIncome ? dispatch(getIncomeBack()) : dispatch(getExpenseBack());
  }, [dispatch, isIncome]);

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

  const { description, category, amount } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    let validValue = value;
    validValue = value.trim().length === 0 ? '' : value;

    setFormData({
      ...formData,
      [name]: name === 'amount' ? Number(validValue) : validValue,
      date: selectedDate,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!initialBalance) {
      return toast.error('Нет капусты 💰');
    }
    isIncome
      ? dispatch(addIncomeBack(formData))
      : dispatch(addExpenseBack(formData));

    reset();
    onCloseForm();
  };

  const onClicReset = () => {
    reset();
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
    setSelectedDate(newDate);
  };

  const onChange = (selectedDates, dateStr, instance) => {
    setSelectedDate(dateStr);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={s.form}>
        <div className={s.form_item}>
          <div className={s.calendar}>
            <img
              src={calend}
              alt="calendar"
              width="20"
              height="18"
              className={s.img}
            />
            <Flatpickr
              options={{
                // minDate: '01-01-2017',
                maxDate: newDate,
              }}
              value={selectedDate}
              onChange={onChange}
              className={s.datestyle}
            />
          </div>

          <div className={s.inputDiscr}>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Описание товара"
              required
              minLength="3"
              maxLength="20"
              pattern="^[A-Za-zА-Яа-яЁё'`\s]+$"
              onChange={handleChange}
              className={`${classsLeft} ${s.inputDiscr_items}`}
            />
            <select
              name="category"
              value={category}
              onChange={handleChange}
              required
              className={`${s.input} ${s.inputDiscr_items}`}
            >
              {(isIncome ? categoryInc : categoryBack).map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className={s.input_icon}>
            <input
              type="number"
              name="amount"
              value={amount}
              placeholder="0,00"
              min="1"
              required
              onChange={handleChange}
              className={classsRight}
            />

            <GrCalculator className={s.icon} />
          </div>
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
  );
};

export default Form;
