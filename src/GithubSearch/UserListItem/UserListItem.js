import React from "react";

const UserListItem = props => (
  <li>
    <a href={props.html_url} target="_blank">
      {props.login}
    </a>
  </li>
);

export default UserListItem;
