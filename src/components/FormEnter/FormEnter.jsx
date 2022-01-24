import { useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import 'flatpickr/dist/themes/material_green.css';
import { ReactComponent as PlusButton } from '../../images/svg/plus_btn.svg';

import { getExpenses } from '../../redux/transaction/expense/transactionSelectors.js';
import { getIncomes } from '../../redux/transaction/incom/transactionIncomeSelectors.js';

import Form from './Form';
import Summary from '../Summary/Summary';
import CashFlow from '../CashFlow/CashFlow';
import Modal from '../../common/Modal/Modal';

import s from './FormEnter.module.css';

const FormEnter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const expense23 = useSelector(state => state.expense.data.items);
  const expense23 = useSelector(getExpenses);
  // const income23 = useSelector(state => state.income.data.itemsIncom);
  const income23 = useSelector(getIncomes);

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 481px)' });
  const isBelowDesktop = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const location = useLocation();

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  const onCloseForm = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={s.formEnter}>
        {isMobile && (
          <button className={s.plus_btn} type="button" onClick={toggleModal}>
            <PlusButton />
          </button>
        )}
        {isTablet && (
          <div>
            <Form />
          </div>
        )}
        <div className={s.renderTab}>
          <CashFlow
            arey={location.pathname === '/income' ? income23 : expense23}
          />
          {isModalOpen && (
            <Modal closeForm={toggleModal}>
              <div>
                <Form onCloseForm={onCloseForm} />
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

      {isTablet && isBelowDesktop && <Summary />}
    </>
  );
};

export default FormEnter;
