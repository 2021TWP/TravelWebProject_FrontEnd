import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import BoardItemView from '../Views/BoardItemView';
import BoardDetailContainer from './BoardDetailContainer';



function seperateBoard(id) {
    console.log(id);
    window.location.href =
    `/board/detail/${id}`;
}

function createBoard(e) {
    window.location.href = '/board/create/';
}



class BoardListContainer extends Component {
    boardStore = BoardStore;

    componentDidMount() {
        this.boardStore.selectAll();
    }

    render() {
        const { boards, selectBoard, checked } = this.boardStore;
        const boardList = boards.map(board => {
            return (
                <span onClick={() => seperateBoard(board.id)}><BoardItemView key={board.id} board={board} checked={checked} checked_id={checked.id} onSelect={()=>selectBoard(board.id)} /></span>
            )
        });

        return (
            <div>
                <div>
                    <h3>게시글 목록</h3>
                    {boardList}
                    <button type="button" onClick={() => createBoard()}>게시글 생성</button>
                </div>
            </div>
        );
    }
}



export default observer(BoardListContainer);