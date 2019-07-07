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

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
};

/*
    if we ever want to get data from
    the redux side of our application, we need to 
    define the mapStateToProps function and pass
    it off to the connect function later in our component file
*/
const mapStateToProps = (state) => { // called with entire state object from redux store
    /*
    remember, we called postsReducer by 'posts'
    in our combineReducers in the index.js of our reducers directory
    */
   return { posts: state.posts } 
};

/*
    hooking up our fetchPosts action 
    reator with PostList component
*/
export default connect(
    mapStateToProps,
    { fetchPosts: fetchPosts }
)(PostList);