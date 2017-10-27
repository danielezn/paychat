import React from 'react';
import { render } from 'react-dom';
import App from './scenes/layout/containers/app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

let initialState = {};
let store = configureStore(initialState);

render(
<Provider store={store}>
  <App/>
</Provider>,
document.getElementById('root')
);