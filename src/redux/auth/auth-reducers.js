import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';

const InitialUserState = { name: null, email: null };

const userReducer = createReducer(InitialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => InitialUserState,
});

const tokenReducer = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const errorReducer = createReducer(null, {
  [authActions.registerRequest]: () => null,
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => null,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.clearErrorMessage]: () => null,
});

const isAuthReducer = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const isloadingAuthReducer = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
});

export default combineReducers({
  user: userReducer,
  isAuth: isAuthReducer,
  token: tokenReducer,
  error: errorReducer,
  isloadingAuth: isloadingAuthReducer,
});
