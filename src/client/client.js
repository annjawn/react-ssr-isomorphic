//Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import 'babel-polyfill'; //this is needed to create a UL LI list from array automatically
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(reducers,
                  window.INITIAL_STATE,
                  applyMiddleware(thunk.withExtraArgument(axiosInstance))
                );

ReactDOM.hydrate(
        <Provider store={store}>
          <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
          </BrowserRouter>
        </Provider>,
        document.querySelector('#root'));
