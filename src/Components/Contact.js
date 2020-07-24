import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrap>
      <h2>Contact me</h2>
      <p>
        seogjong1018@naver.com <br />
        010 - 7661 - 5589
      </p>
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  margin-top: 40px;
  text-align: center;
  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }
  p {
    display: inline-block;
    width: 400px;
    padding: 20px;
    font-size: 22px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 2px 2px gray;
    line-height: 50px;
    background: #292626;
    color: #fff;
    font-weight: bold;
    letter-spacing: 3px;
  }
`;

export default Contact;
