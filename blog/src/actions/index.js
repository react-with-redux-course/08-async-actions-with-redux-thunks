import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

/*
    whenever we have an action creator in an action creator,
    be sure to dispatch the result of calling the action creator
*/
export const fetchPostsAndUsers = () => async dispatch => {
    await dispatch(fetchPosts());
};

/*
async/await keywords transpiled into ES5 code, and so our
fetchPosts action creator does NOT return a plain JS object

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
*/

// typical format of redux thunks
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// alternative way of writing above thunk

// export const fetchPosts = () => {
//     /*
//         removed the second argument of 'getState'
//         if we're not making use of it
//     */
//     return async (dispatch) => {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response })
//     };
// };

// using id of the user we want to fetch

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data});
};