import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);