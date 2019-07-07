import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

/*
    dummy key/variable to make our app think we
    have at least one reducer

    export default combineReducers({
        replaceMe: () => 'hi there' // return some fixed value
    });
*/
export default combineReducers({
    // replaceMe: () => 'hi there'
    posts: postsReducer,
    users: usersReducer
});