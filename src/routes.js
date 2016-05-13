// Modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/app';
// 3. To make 'PostIndex' component active we import it
import PostsIndex from './components/post_index';

// Paths
// 2. Here we add a new 'PostIndex' component as IndexRoute to make its as root route
export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostsIndex} />
    </Route>
);
