// Modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/app';

// 1. Here we add a check Component
const Greeting = () => {
    return <div>Hey there!</div>
};

// 2 Here we define different paths for one check component
export default (
    <Route path="/" component={App} >
        <Route path="greet1" component={Greeting} />
        <Route path="greet2" component={Greeting} />
        <Route path="greet3" component={Greeting} />
    </Route>
);
