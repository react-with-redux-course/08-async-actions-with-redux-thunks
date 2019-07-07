import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        // see the <UserHeader /> in PostList.js
        this.props.fetchUser(this.props.userId);
    }
    
    render() {
        const { user } = this.props;
        if (!user) return null;
        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
};

/*
    ownProps object is a reference to the props that will
    be sent to the component
*/
const mapStateToProps = (state, ownProps) => {
    /*
        state.users comes from the users key in our
        combineReducers of our reducers directory
    */
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);