import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App'
import { makeServer } from './mockserver/server';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import './index.scss';

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);