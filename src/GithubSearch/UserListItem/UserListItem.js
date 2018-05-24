import React from "react";
import styled from "styled-components";

const UserListItem = props => (
  <Wrapper>
    <a href={props.html_url} target="_blank">
      <Image src={props.avatar_url} alt={`${props.login} Avatar`} />
      <p>{props.login}</p>
    </a>
  </Wrapper>
);

export default UserListItem;

const Wrapper = styled.li`
  width: 10%;
  background-color: #2196f3;
  margin-bottom: 15px;
  margin-right: 10px;
  color: black;
  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
  }

  p {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
