import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/about">ABOUT</StyledLink>
        </li>
        <li>
          <StyledLink to="/board">BOARD</StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage">MYPAGE</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 10%;
  right: 8%;
  z-index: 10;
  width: 30%;
  height: 30px;
  float: right;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
    font-size: 20px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: red;
  }
`;

export default Navigation;
