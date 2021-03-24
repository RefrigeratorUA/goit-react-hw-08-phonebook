const getIsAuth = state => state.auth.isAuth;

const getUserName = state => state.auth.user.name;

// eslint-disable-next-line
export default {
  getIsAuth,
  getUserName,
};
