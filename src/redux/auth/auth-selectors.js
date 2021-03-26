const getIsAuth = state => state.auth.isAuth;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getAuthLoading = state => state.auth.isloadingAuth;

const getAuthError = ({ auth: { error } }) => error;

// eslint-disable-next-line
export default {
  getIsAuth,
  getUserName,
  getToken,
  getAuthLoading,
  getAuthError,
};
