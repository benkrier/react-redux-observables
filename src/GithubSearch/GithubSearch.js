import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchUser, searchUsers } from "../actionCreators";

import UserListItem from "./UserListItem/UserListItem";

const UserList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

class GithubSearch extends Component {
  searchUser = this.searchUser.bind(this);

  searchUser(event) {
    this.props.searchUsers(event.target.value);
  }

  render() {
    let userList = "";
    if (Array.isArray(this.props.searchResults.items)) {
      userList = (
        <UserList>
          {this.props.searchResults.items.map(item => (
            <UserListItem key={item.id} {...item} />
          ))}
        </UserList>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Github Search</h2>
        <input type="text" placeholder="Username" onChange={this.searchUser} />
        {userList}
        {/* <code>
          <pre>{JSON.stringify(this.props.searchResults, null, 2)}</pre>
        </code> */}
        {/* <code>
          <pre>{JSON.stringify(this.props.repos, null, 2)}</pre>
        </code> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  image: state.user.avatar_url,
  repos: state.repos,
  searchResults: state.searchResults
});
const mapDispatchToProps = {
  fetchUser,
  searchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubSearch);
