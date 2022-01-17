const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getErrorMessage = state => state.auth.error;

export { getUserEmail, getIsLoggedIn, getErrorMessage };
