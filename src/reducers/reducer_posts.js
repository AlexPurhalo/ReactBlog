// In this section we gonna setup reducer that hold the information from action

// 1. Firstly we take a variable from actions that store type of data
import { FETCH_POSTS } from '../actions/index';

// 2. Then we give a default value to 'state' passing 'INITIAL_STATE' variable there
const INITIAL_STATE = { all: [], post: null };

// 3. Here we can see that we passed this 'INITIAL_STATE' variable to state
//    Also we pass an action as second parameter of function
export default function(state = INITIAL_STATE, action) {
// 4. On this step we add switch to detect a data.type that comes to reducer
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}