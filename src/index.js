import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react';
// import Loader from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Loader className="pre-loader" />} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
