import React from "react";

const RepoListItem = props => (
  <li>
    <a href={props.svn_url} target="_blank">
      {props.name}
    </a>
  </li>
);

export default RepoListItem;
