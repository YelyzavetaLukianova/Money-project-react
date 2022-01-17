import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = props => {
  const { text, onClick = () => {}, type = 'button' } = props;

  return (
    <button className={s.button} type={type} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
