import Button from '../../../common/Button';
import s from './BalanceForm.module.css';

export default function BalanceForm() {
  return (
    <div className={s.balance_form_wrapper}>
      <p>Баланс:</p>
      <form className={s.balance_form}>
        <input
          className={s.balance_input}
          type="number"
          pattern="^[ 0-9]+$"
          title="Поле должно состоять только из цифр"
        />
        <Button text="ПОДТВЕРДИТЬ" className={s.balance_button} />
      </form>
    </div>
  );
}
