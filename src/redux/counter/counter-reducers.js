import { combineReducers } from 'redux';
import actionsTypes from './action-types';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionsTypes.INCREMENT:
      return state + payload;
    case actionsTypes.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
