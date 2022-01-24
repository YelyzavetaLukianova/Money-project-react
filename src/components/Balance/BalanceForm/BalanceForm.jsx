import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getBalance,
  updateBalance,
} from '../../../redux/balance/balanceOperations';
import ModalWarning from '../../ModalWarning';

import Button from '../../../common/Button';
import s from './BalanceForm.module.css';

export default function BalanceForm({ display_none, btnCheker }) {
  const dispatch = useDispatch();
  let modalWarnProps = false;
  let initialBalance = useSelector(state => state.balance.balance);

  const [input, setInput] = useState('');
  const handleChange = e => {
    if (!initialBalance) {
      setInput(e.target.value);
    }
  };

  if (initialBalance === 0) {
    initialBalance = '';
  }

  useEffect(() => {
    dispatch(getBalance());
    setInput(initialBalance);
  }, []);

  useEffect(() => {
    setInput(initialBalance);
  }, [initialBalance]);

  const addBalance = e => {
    e.preventDefault();
    const newBalance = Number(input);
    modalWarnProps = true;

    if (newBalance > 0) {
      dispatch(updateBalance({ newBalance }));
    } else {
      toast.error('Баланс должен быть положительным');
    }
  };

  return (
    <div className={s.balance_form_wrapper}>
      <p className={s.text}>Баланс:</p>
      <form className={s.balance_form} onSubmit={addBalance}>
        <span className={s.input_wrapper}>
          <input
            name="balance"
            onChange={handleChange}
            value={input}
            className={
              !btnCheker
                ? s.balance_input
                : `${s.balance_input} ${s.input_chek}`
            }
            type="number"
            pattern="^[ 0-9]+$"
            title="Поле должно состоять только из цифр"
            placeholder="0.00"
          />
          <ModalWarning
            initialBalance={initialBalance}
            modalWarnProps={modalWarnProps}
          />
        </span>
        {!initialBalance && (
          <Button
            text="ПОДТВЕРДИТЬ"
            type={'submit'}
            className={!display_none ? s.balance_button : s.display_none}
          />
        )}
        {/* <Button
          text="ПОДТВЕРДИТЬ"
          type={'submit'}
          className={!display_none ? s.balance_button : s.display_none}
        /> */}
      </form>
    </div>
  );
}
