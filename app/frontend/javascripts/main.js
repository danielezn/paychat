import React from 'react';
import cookie from 'react-cookies';
import { render } from 'react-dom';
// Local imports
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App } from './scenes/layout/containers';
import { AUTH_USER } from './scenes/authentication/constants';

const token = cookie.load('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);