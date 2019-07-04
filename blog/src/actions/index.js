import jsonPlaceholder from '../apis/jsonPlaceholder';

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
    dispatch({ type: 'FETCH_POSTS', payload: response });
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