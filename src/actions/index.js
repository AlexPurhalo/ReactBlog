// In this section we gonna set our action to get the data from certain resource

// 6. And here we import 'axios' that allow create a 'get' request
import axios from 'axios';

// 3. For returning of 'FETCH_POSTS' as value of type firstly we want store this to variable
//    We do this that this variable will be reusable in future in more than one place
export const FETCH_POSTS = 'FETCH_POSTS';
// 5. Here we add some specification for 'get' method's argument
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=askeycouldbeanything123'

// 1. Firstly we want define a function to fetch a data
export function fetchPosts() {
// 4. To pass a 'request' as value of 'payload' firstly we want to add the settings our 'request' variable
//    As we see we add here a 'get' method to get some data
//    This data is showing up as argument of 'get' method and these are http request with specification
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
// 2. In function we want return type and payload
    return {
        type: FETCH_POSTS,
        payload: request
    };
}