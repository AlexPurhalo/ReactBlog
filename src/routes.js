// Modules
import React from 'react';
// 6. To make our 'Route' valid we need import some stuff
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/app';

// 5. Now we need to add a root route to 'App' component.
//    Means that this will show 'App' component coming to root path of page, example: https://brazzers.com/
//    Where root route is stuff after last slash
export default (
    <Route path="/" component={App} />
);
