import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// 1. Import the 'Router' that responsible for route of site, like this: https://brazzers.com
// 2. Then we add 'browserHistory' to check past like this: /posts/5
import { Router, browserHistory } from 'react-router';
// 8. To make our routes valid we import 'routes' from file with source of routes
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// 3. After we've imported data we use this rendering the routes
// 4. Data from browserHistory we pass to 'history' instance, this data like: '/posts/1'
// 7. We use routes instance to store the value of current 'routes'
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
