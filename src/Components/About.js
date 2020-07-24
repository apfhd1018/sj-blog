import React from "react";
import styled from "styled-components";
import css3 from "../Img/css3.png";
import html5 from "../Img/html5.png";
import javascript from "../Img/javascript.png";
import react from "../Img/react.png";

const About = () => {
  return (
    <AboutWrap>
      <h2>Frontend Developer</h2>
      <p>
        HTML, CSS, JAVASCRIPT를 공부하며 프론트엔드 개발자를 꿈꿨고,
        <br /> 최근 REACT를 공부하며 비동기처리 페이지 제작에 관심을 가지고
        있습니다.
      </p>
      <ul>
        <li>
          <img src={css3} alt="" />
        </li>
        <li>
          <img src={html5} alt="" />
        </li>
        <li>
          <img src={javascript} alt="" />
        </li>
        <li>
          <img src={react} alt="" />
        </li>
      </ul>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  text-align: center;
  padding-top: 50px;
  h2 {
    text-decoration: underline;
    font-size: 30px;
  }
  p {
    margin-top: 30px;
    line-height: 30px;
    font-size: 20px;
  }
  ul {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  ul li {
    list-style: none;
    margin: 0 5px 0 5px;
  }
  ul li img {
    width: 120px;
    height: auto;
  }
`;

export default About;
