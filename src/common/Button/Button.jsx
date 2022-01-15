import s from './Button.module.css';

const Button = props => {
  const { text, onClick = () => {}, type = 'button' } = props;

  return (
    <button className={s.button} type={type} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
export default Button;
