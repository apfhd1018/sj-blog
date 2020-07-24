import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/board" style={{ textDecoration: "none", color: "#fff" }}>
            BOARD
          </Link>
        </li>
        <li>
          <Link to="/mypage" style={{ textDecoration: "none", color: "#fff" }}>
            MYPAGE
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
            CONTACT
          </Link>
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
// const styledLink = styled(Link)`
//   text-decoration: none;
// `;

export default Navigation;
