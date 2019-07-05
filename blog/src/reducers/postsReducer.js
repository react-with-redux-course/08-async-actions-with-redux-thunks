/*
    NEVER alter state in a mutative way when
    we are returning an array or object from
    our reducer
*/

/* 
    returnig a state of an empty array the first
    time the recuducer is called
*/
export default (state = [], action) => {
    switch (action.type) {
        // will typically have more cases than 1 in other apps...
        case 'FETCH_POSTS':
            return action.payload;
        default:
            // never want to return 'undefined' from a reducer
            return state;
    }
};