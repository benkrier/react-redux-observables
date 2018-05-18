import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class GithubSearch extends Component {
  searchUser = this.searchUser.bind(this);

  searchUser(event) {
    this.props.fetchUser(event.target.value);
  }

  render() {
    return (
      <div>
        <h2>Github Search</h2>
        <input type="text" placeholder="Username" onChange={this.searchUser} />
        <p>
          <img src={this.props.image} alt="Not Found" width={100} />
        </p>
        <code>
          <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
        </code>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  image: state.user.avatar_url
});
const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubSearch);
