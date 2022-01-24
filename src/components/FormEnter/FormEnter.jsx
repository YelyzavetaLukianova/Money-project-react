import { useState, useEffect } from 'react';

import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import 'flatpickr/dist/themes/material_green.css';
import { ReactComponent as PlusButton } from '../../images/svg/plus_btn.svg';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './Form';
import Summary from '../Summary/Summary';
import CashFlow from '../CashFlow/CashFlow';
import {
  getExpenseItems,
  getExpenseError,
} from '../../redux/transaction/expense/transactionSelectors';

import {
  getIncomeItems,
  getIncomeError,
} from '../../redux/transaction/incom/transactionIncomeSelectors';

import Modal from '../../common/Modal/Modal';
import s from './FormEnter.module.css';

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

const FormEnter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curDate, setCurDate] = useState('');
  const [errorInc, setErrorInc] = useState('');
  const [errorExpense, setErrorExpense] = useState('');

  const expense23 = useSelector(getExpenseItems);
  const income23 = useSelector(getIncomeItems);

  const errorExp = useSelector(getExpenseError);
  const errorIncome = useSelector(getIncomeError);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isBelowDesktop = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  // const isTablet = useMediaQuery({ query: '(min-width: 481px)' });
  // const isBelowDesktop = useMediaQuery({ query: '(max-width: 1279px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const location = useLocation();

  useEffect(() => {
    setErrorInc(errorIncome);
  }, [errorIncome]);

  useEffect(() => {
    setErrorExpense(errorExp);
  }, [errorExp]);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  const onCloseForm = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(false);
  };

  const currentDate = date => {
    setCurDate(date);
  };

  return (
    <>
      {errorInc && toast.error('Что-то с вашими доходами')}
      {errorExpense && toast.error('Что-то с вашими расходами')}

      <div className={s.formEnter}>
        {isMobile && (
          <button className={s.plus_btn} type="button" onClick={toggleModal}>
            <PlusButton />
          </button>
        )}
        {isTablet && (
          <div>
            <Form isModalOpen={isModalOpen} currentDate={currentDate} />
          </div>
        )}
        <div className={s.renderTab}>
          <CashFlow
            arey={location.pathname === '/income' ? income23 : expense23}
            curDate={curDate}
          />
          {isModalOpen && (
            <Modal closeForm={toggleModal}>
              <div>
                <Form onCloseForm={onCloseForm} />
              </div>
            </Modal>
          )}
          {isDesktop && <Summary curDate={curDate} />}
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

      {isTablet && isBelowDesktop && <Summary />}
    </>
  );
};

export default FormEnter;
