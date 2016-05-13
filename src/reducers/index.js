// In this section we gonna setup reducer that hold the information from action

import { combineReducers } from 'redux';
// 2. Then we want take this 'PostReducer' with data from reducer_posts.js 
import PostsReducer from './reducer_posts';

// 1. Firstly we want pass to RootReducer the object that hold 'posts' as key
//    and value as data from reducer that hold info about posts
const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
