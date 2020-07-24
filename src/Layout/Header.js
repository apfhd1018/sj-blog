import React from "react";
import styled from "styled-components";
import background from "../Img/background.jpg";

const Header = () => {
  return (
    <HeaderWrap>
      <h1>
        리액트로 제작된
        <br /> 유석종의 블로그입니다.
      </h1>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40vh;
  background: url(${background}) no-repeat center/cover;
  border-bottom: 1px solid #000;
  h1 {
    padding-top: 130px;
    text-align: center;
    color: #fff;
    font-weight: 500;
    letter-spacing: 6px;
  }
`;

export default Header;
