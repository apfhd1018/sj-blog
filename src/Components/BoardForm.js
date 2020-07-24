import React, { Component } from "react";
import styled from "styled-components";

class BoardForm extends Component {
  state = {
    brdwriter: "",
    brdtitle: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelectRow = (row) => {
    this.setState(row);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      brdno: "",
      brdwriter: "",
      brdtitle: "",
    });
  };

  render() {
    return (
      <BoardFormWrap>
        <form onSubmit={this.handleSubmit}>
          <input
            className="title"
            placeholder="내용을 입력하세요."
            name="brdtitle"
            value={this.state.brdtitle}
            onChange={this.handleChange}
          />
          <input
            className="name"
            placeholder="이름을 입력하세요."
            name="brdwriter"
            value={this.state.brdwriter}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </BoardFormWrap>
    );
  }
}

const BoardFormWrap = styled.div`
  margin-top: 30px;
  input {
    border-radius: 1px;
  }
  input.title {
    width: 350px;
    height: 30px;
    margin-right: 20px;
  }
  input.name {
    width: 120px;
    height: 30px;
    margin-right: 20px;
  }
  button {
    border: 1.5px solid #000;
    background: #fff;
    color: #000;
    box-shadow: 2px 2px gray;
    width: 50px;
    height: 32px;
    border-radius: 8px;
    transition: 0.2s ease-out;

    &:hover {
      background: #2d2f33;
      color: #fff;
      border: none;
    }
  }
`;

export default BoardForm;
