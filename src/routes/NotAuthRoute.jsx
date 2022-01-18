import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

const NotAuthRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Redirect to={redirectTo} /> : children;
};

NotAuthRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NotAuthRoute;
