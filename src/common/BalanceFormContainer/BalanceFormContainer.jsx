import PropTypes from 'prop-types';
import s from './BalanceFormContainer.module.css';

const BalanceFormContainer = ({ children }) => {
  return <div className={s.balance_container}>{children}</div>;
};

BalanceFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BalanceFormContainer;
