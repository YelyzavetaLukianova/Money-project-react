import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => {
  return <div className={s.bg_app}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
