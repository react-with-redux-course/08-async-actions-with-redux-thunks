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

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};