/*
    NEVER alter state in a mutative way when
    we are returning an array or object from
    our reducer
*/

export default (state, action) => {
    return 123;
};