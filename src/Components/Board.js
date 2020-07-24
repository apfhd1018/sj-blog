import React, { Component } from "react";
import styled from "styled-components";
import BoardForm from "./BoardForm";
import BoardItem from "./BoardItem";

class Board extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    maxNo: 3,
    boards: [
      {
        brdno: 1,
        brdwriter: "Yu Seogjong",
        brdtitle: "유석종의 자유게시판 입니다.",
        brddate: new Date(),
      },
      {
        brdno: 2,
        brdwriter: "유석종",
        brdtitle: "하고 싶은 말을 작성후 저장해보세요.",
        brddate: new Date(),
      },
    ],
  };

  handleSaveData = (data) => {
    let boards = this.state.boards;
    if (data.brdno === null || data.brdno === "" || data.brdno === undefined) {
      // new : Insert
      this.setState({
        maxNo: this.state.maxNo + 1,
        boards: boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(),
          brdwriter: data.brdwriter,
          brdtitle: data.brdtitle,
        }),
      });
    } else {
      // Update
      this.setState({
        boards: boards.map((row) =>
          data.brdno === row.brdno ? { ...data } : row
        ),
      });
    }
  };

  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter((row) => row.brdno !== brdno),
    });
  };

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row);
  };

  render() {
    const { boards } = this.state;

    return (
      <BoardWrap>
        <h2>자유게시판</h2>
        <BoardForm onSaveData={this.handleSaveData} ref={this.child} />
        <table border="1">
          <tbody>
            <tr align="center" height="40">
              <td width="50">No.</td>
              <td width="450">내용</td>
              <td width="120">이름</td>
              <td width="100">날짜</td>
            </tr>
            {boards.map((row) => (
              <BoardItem
                key={row.brdno}
                row={row}
                onRemove={this.handleRemove}
                onSelectRow={this.handleSelectRow}
              />
            ))}
          </tbody>
        </table>
      </BoardWrap>
    );
  }
}

const BoardWrap = styled.div`
  text-align: center;
  table {
    margin: 20px auto;
  }
  h2 {
    margin-top: 50px;
  }
`;

export default Board;
