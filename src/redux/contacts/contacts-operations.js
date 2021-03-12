import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from '../contacts';

axios.defaults.baseURL = 'http://localhost:7777';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const item = { name, number };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', item);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line
export default {
  fetchContacts,
  addContact,
  deleteContact,
};
