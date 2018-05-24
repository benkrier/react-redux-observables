import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, searchUsers } from "../actionCreators";

import UserListItem from "./UserListItem/UserListItem";

class GithubSearch extends Component {
  searchUser = this.searchUser.bind(this);

  searchUser(event) {
    this.props.searchUsers(event.target.value);
  }

  render() {
    let userList = "";
    if (Array.isArray(this.props.searchResults.items)) {
      userList = (
        <ul>
          {this.props.searchResults.items.map(item => (
            <UserListItem key={item.id} {...item} />
          ))}
        </ul>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Github Search</h2>
        <input type="text" placeholder="Username" onChange={this.searchUser} />
        {/* <p>
          <img src={this.props.image} alt="Not Found" width={100} />
        </p> */}
        {userList}
        {/* <code>
          <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
        </code> */}
        <code>
          <pre>{JSON.stringify(this.props.searchResults, null, 2)}</pre>
        </code>
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
