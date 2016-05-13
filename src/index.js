// React Modules 
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Modules 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Router Module 
import { Router, browserHistory } from 'react-router';

// Connections  
import reducers from './reducers';
import routes from './routes';

// MiddleWare 
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Data Rendering
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
