const getIsLoggedIn = state => state.aauth.isLoggedIn;

const getErrorMessage = state => state.aauth.error;

export { getIsLoggedIn, getErrorMessage };
