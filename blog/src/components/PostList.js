import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    /*
        the instance our component is rendered on the screen, our
        fetchPosts action creator will be called
    */
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Post List
            </div>
        )
    }
};

/*
    hooking up our fetchPosts action 
    reator with PostList component
*/
export default connect(
    null,
    { fetchPosts: fetchPosts }
)(PostList);