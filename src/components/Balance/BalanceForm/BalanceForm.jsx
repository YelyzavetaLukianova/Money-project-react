import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getBalance from '../../../redux/balance/balanceOperations';
import { updateUserBalance } from '../../../services/kapusta-api';

import Button from '../../../common/Button';
import s from './BalanceForm.module.css';

export default function BalanceForm({ display_none }) {
  const dispatch = useDispatch();
  const initialBalance = useSelector(state => state.balance.balance);

  const [input, setInput] = useState(null);
  const handleChange = e => {
    setInput(e.target.value);
  };

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

    if (newBalance > 0) {
      dispatch(updateUserBalance({ newBalance: newBalance }));
    } else {
      alert('Баланс должен быть положительным');
    }
  };

  return (
    <div className={s.balance_form_wrapper}>
      <p>Баланс:</p>
      <form className={s.balance_form} onSubmit={addBalance}>
        <input
          name="balance"
          onChange={handleChange}
          value={input}
          className={s.balance_input}
          type="number"
          pattern="^[ 0-9]+$"
          title="Поле должно состоять только из цифр"
        />
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
