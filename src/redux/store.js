import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducers';
import { contactsReducer } from './contacts';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  contacts: contactsReducer,
  counter: counterReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const persistor = persistStore(store);

// eslint-disable-next-line
export default store;
