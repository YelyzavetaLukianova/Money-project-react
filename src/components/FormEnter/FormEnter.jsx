import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { GrCalculator } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';

import s from './FormEnter.module.css';
import Summary from '../Summary/Summary';
import CashFlow from '../CashFlow/CashFlow';
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
} from '../../services/kapusta-api';

const classsLeft = s.input + ' ' + s.left_input;
const classsRight = s.input + ' ' + s.right_input;
const classsDate = s.input + ' ' + s.date_input;

const INITIAL_STATE = {
  date: '',
  description: '',
  category: '',
  amount: '',
};

const FormEnter = () => {
  const dispatch = useDispatch();

  const expense23 = useSelector(state => state.expense.data.items);
  const income23 = useSelector(state => state.income.data.itemsIncom);

  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const [categoryBack, setCategoryBack] = useState([]);
  const [categoryInc, setCategoryInc] = useState([]);

  const location = useLocation();

  useEffect(() => {
    location.pathname === '/income'
      ? dispatch(getIncomeBack())
      : dispatch(getExpenseBack());
  }, [dispatch, location.pathname]);

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

  const { date, description, category, amount } = formData;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    location.pathname === '/income'
      ? dispatch(addIncomeBack(formData))
      : dispatch(addExpenseBack(formData));

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
              name="description"
              value={description}
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
      <div className={s.renderTab}>
        <CashFlow
          arey={location.pathname === '/income' ? income23 : expense23}
        />
        <Summary />
      </div>
    </div>
  );
};

export default FormEnter;
