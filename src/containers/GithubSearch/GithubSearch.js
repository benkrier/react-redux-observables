import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

import RepoListItem from "../../components/RepoListItem";

class GithubSearch extends Component {
  searchUser = this.searchUser.bind(this);

  searchUser(event) {
    this.props.fetchUser(event.target.value);
  }

  render() {
    let repoList = "";
    if (Array.isArray(this.props.repos)) {
      repoList = (
        <ul>
          {this.props.repos.map(repo => (
            <RepoListItem key={repo.id} {...repo} />
          ))}
        </ul>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Github Search</h2>
        <input type="text" placeholder="Username" onChange={this.searchUser} />
        <p>
          <img src={this.props.image} alt="Not Found" width={100} />
        </p>
        {repoList}
        <code>
          <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
        </code>
        <code>
          <pre>{JSON.stringify(this.props.repos)}</pre>
        </code>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  image: state.user.avatar_url,
  repos: state.repos
});
const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubSearch);
