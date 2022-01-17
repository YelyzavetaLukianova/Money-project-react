const getUserEmail = state => state.auth.user.email;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getUserEmail,
  getIsLoggedIn,
};
export default authSelectors;
