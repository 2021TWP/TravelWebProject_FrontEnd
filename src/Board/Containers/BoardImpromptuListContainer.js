import React, { Component } from 'react';
import BoardStore from '../Stores/BoardStore';
import BoardItemView from '../Views/BoardItemView';
import BoardDetailContainer from './BoardDetailContainer';


function seperateBoard(id) {
  window.location.href =
  `/board/detail/${id}`;
}

function createBoard(e) {
  window.location.href = '/board/create/';
}




class BoardImpromptuListContainer extends Component {

  boardStore = BoardStore;
  
  componentDidMount() {
    this.boardStore.selectImpromptu();
}

render() {
  const { boards, selectBoard, checked } = this.boardStore;
  const boardList = boards.map(board => {
      return (
          <span onClick={() => seperateBoard(board.id)}><BoardItemView key={board.id} board={board} checked={checked} checked_id={checked.id} selectBoard={()=>selectBoard(board.id)} /></span>
      )
  });

  return (
      <div>
          <div>
              <h3>게시글 목록</h3>
              {boardList}
              <button type="button" onClick={() => createBoard()}>게시글 생성</button>
          </div>
      
          <div>
              {(this.boardStore.board.id !== undefined && this.boardStore.board.id > 0) && <BoardDetailContainer/>}
          </div>
      </div>
  );
}
}

export default BoardImpromptuListContainer;