const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;

const getSessionId = state => state.auth.sid;

const getErrorMessage = state => state.auth.error;

export {
  getUserEmail,
  getIsLoggedIn,
  getIsRefreshCurrentUser,
  getSessionId,
  getErrorMessage,
};
