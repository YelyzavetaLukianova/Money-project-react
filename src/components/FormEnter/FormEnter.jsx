import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { GrCalculator } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import calend from './calendar.png';
import BackHomeButton from '../../components/Balance/BackHomeButton/BackHomeButton';

import { BsPlusCircle } from 'react-icons/bs';

import 'flatpickr/dist/themes/material_green.css';

import Flatpickr from 'react-flatpickr';

import Button from '../../common/Button/Button';
import Form from './Form';

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
import { NavLink } from 'react-router-dom';
import Modal from '../../common/Modal/Modal';

const classsLeft = s.input + ' ' + s.left_input;
const classsRight = s.input + ' ' + s.right_input;

const INITIAL_STATE = {
  date: '',
  description: '',
  category: '',
  amount: null,
};

const FormEnter = () => {
  const dispatch = useDispatch();

  const expense23 = useSelector(state => state.expense.data.items);
  const income23 = useSelector(state => state.income.data.itemsIncom);

  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoryBack, setCategoryBack] = useState([]);
  const [categoryInc, setCategoryInc] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 481px)' });

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

  const { description, category, amount } = formData;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'amount' ? Number(value) : value,
      date: selectedDate,
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
    setSelectedDate(new Date());
  };

  const onChange = (selectedDates, dateStr, instance) => {
    setSelectedDate(dateStr);
  };

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <div className={s.formEnter}>
      {isMobile && <BackHomeButton />}
      {isMobile && (
        <button type="button" onClick={toggleModal}>
          <BsPlusCircle />
        </button>
      )}
      {isDesktop && (
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
                  options={{ minDate: '01-01-2017', maxDate: new Date() }}
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
                  onChange={handleChange}
                  className={`${classsLeft} ${s.inputDiscr_items}`}
                />
                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className={`${s.input} ${s.inputDiscr_items}`}
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
              </div>
              <div className={s.input_icon}>
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
      )}
      <div className={s.renderTab}>
        <CashFlow
          arey={location.pathname === '/income' ? income23 : expense23}
        />
        {isModalOpen && (
          <Modal closeForm={toggleModal}>
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
                      options={{ minDate: '01-01-2017', maxDate: new Date() }}
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
                      onChange={handleChange}
                      className={`${classsLeft} ${s.inputDiscr_items}`}
                    />
                    <select
                      name="category"
                      value={category}
                      onChange={handleChange}
                      className={`${s.input} ${s.inputDiscr_items}`}
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
                  </div>
                  <div className={s.input_icon}>
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
          </Modal>
        )}
        {isDesktop && <Summary />}
        {isMobile && (
          <div>
            <div className={s.header}>
              <NavLink
                to="/expense"
                className={s.link}
                activeClassName={s.active}
                exact
              >
                РАСХОД
              </NavLink>
              <NavLink
                to="/income"
                className={s.link}
                activeClassName={s.active}
                exact
              >
                ДОХОД
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormEnter;
