import { useState, useEffect } from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import BackHomeButton from '../../components/Balance/BackHomeButton/BackHomeButton';

import { BsPlusCircle } from 'react-icons/bs';
import Form from './Form';

import 'flatpickr/dist/themes/material_green.css';

import s from './FormEnter.module.css';
import Summary from '../Summary/Summary';
import CashFlow from '../CashFlow/CashFlow';

import { NavLink } from 'react-router-dom';
import Modal from '../../common/Modal/Modal';

const FormEnter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expense23 = useSelector(state => state.expense.data.items);
  const income23 = useSelector(state => state.income.data.itemsIncom);

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 481px)' });

  const location = useLocation();

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
              <Form />
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
