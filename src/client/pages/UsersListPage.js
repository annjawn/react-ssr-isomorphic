import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component{
  componentDidMount(){
    //users may have been passed by the SSR
    //in that case skip another API call
    // const users = this.props.users;

    // if (!users){
      this.props.fetchUsers();
    // }

  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.id}>
          {user.name}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        Here's the list of users!
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

// export { loadData };

export default {
  loadData: loadData,
  component: connect(mapStateToProps,{ fetchUsers })(UsersList)
};
