import React from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Mypage = () => {
  return (
    <MypageWrap>
      <h2>My Page</h2>
      <a href="https://www.instagram.com/mni_sj/" target="_blank">
        <FiInstagram size="70" color="#000" />
      </a>
      <a href="https://github.com/apfhd1018">
        <AiFillGithub size="70" color="#000" />
      </a>
    </MypageWrap>
  );
};

const MypageWrap = styled.div`
  text-align: center;
  margin-top: 40px;
  h2 {
    font-size: 30px;
  }
  a {
    display: inline-block;
    margin: 0 20px 0 20px;
    margin-top: 50px;
  }
`;

export default Mypage;
