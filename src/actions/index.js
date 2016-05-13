import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POSt';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=askeycouldbeanything123'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// 1. Here we create a new action that takes props as parameter to recognize data and send to reducer
//    Then we do everything almost same things as with 'fetchPosts' function but now we use post method
//    Also e pass two arguments to post method where second already our properties
// 2. As we see props is data from PostsNew component
export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}