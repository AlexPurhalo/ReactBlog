// In this section we going to add a Promise to make a Middleware active

// React Modules 
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Modules 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// 1. Import a 'promise' for Middleware
import promise from 'redux-promise';

// Route Module
import { Router, browserHistory } from 'react-router';

// Connections  
import reducers from './reducers';
import routes from './routes';

// MiddleWare
// 2. Add a 'promise' to Middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Data Rendering
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
