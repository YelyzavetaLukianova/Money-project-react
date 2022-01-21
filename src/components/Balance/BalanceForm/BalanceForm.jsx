import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserBalance } from '../../../services/kapusta-api';
import getBalance from '../../../redux/balance/balanceOperations';
import ModalWarning from '../../ModalWarning';

import Button from '../../../common/Button';
import s from './BalanceForm.module.css';

export default function BalanceForm({ display_none }) {
  const dispatch = useDispatch();
  let initialBalance = useSelector(state => state.balance.balance);

  const [input, setInput] = useState('');
  const handleChange = e => {
    if (!initialBalance) {
      setInput(e.target.value);
    }
  };

  useEffect(() => {
    dispatch(getBalance());
    setInput(initialBalance);
  }, []);

  useEffect(() => {
    setInput(initialBalance);
  }, [initialBalance]);

  const updateBalance = () => {
    return input;
  };

  const addBalance = e => {
    e.preventDefault();

    const newBalance = Number(input);

    if (newBalance > 0) {
      dispatch(updateUserBalance({ newBalance: newBalance }));
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
            className={s.balance_input}
            type="number"
            pattern="^[ 0-9]+$"
            title="Поле должно состоять только из цифр"
          />
          <ModalWarning initialBalance={initialBalance} />
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
