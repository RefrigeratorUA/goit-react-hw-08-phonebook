import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from '../contacts';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== Number(payload)),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactsRequest]: () => '',
  [fetchContactsError]: () => 'Ошибка получения контактов из БД',
  [addContactRequest]: () => '',
  [addContactError]: () => 'Ошибка записи контакта в БД',
  [deleteContactRequest]: () => '',
  [deleteContactError]: () => 'Ошибка удаления контакта из БД',
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
