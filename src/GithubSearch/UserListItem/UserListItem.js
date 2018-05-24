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
  width: 44%;
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

  @media (min-width: 600px) {
    width: 23%;
  }

  @media (min-width: 992px) {
    width: 10%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
