import { createSelector } from '@reduxjs/toolkit';

const getLoading = ({ contacts: { loading } }) => loading;

const getFilter = ({ contacts: { filter } }) => filter;

const getError = ({ contacts: { error } }) => error;

const getAllContacts = ({ contacts: { items } }) => items;

const getFilteredContacts = createSelector([getAllContacts, getFilter], (items, filter) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())),
);

// eslint-disable-next-line
export default {
  getLoading,
  getFilter,
  getError,
  getAllContacts,
  getFilteredContacts,
};
