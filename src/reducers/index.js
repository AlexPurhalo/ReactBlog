import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
// 1. We pass to form a formReducer   
  form: formReducer
});

export default rootReducer;
