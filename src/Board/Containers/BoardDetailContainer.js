import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentInputContainer from './CommentInputContainer';
import CommentListContainer from './CommentListContainer';

function GoBoardList(e) {
    window.location.href = '/board/list/';
}


class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board, boardRemove, boardLike ,  boardModify , boardSetProps} = this.boardStore;
        return (
            <div>
                <h3>게시글 상세</h3>
                <BoardDetailView 
                board={board}
                boardModify = {boardModify}
                boardRemove={boardRemove}
                boardLike={boardLike} 
                boardSetProps={boardSetProps}/>

                <CommentInputContainer/>
                {/* {comment.length > 0 && <CommentListContainer />} */}
                {/* {board.id === comment.board_id ? <CommentListContainer /> : ""} */}
                <CommentListContainer /> <br/>

                <button type="button" onClick={() => GoBoardList()}>목록으로</button>
            </div>
        );
    }
}

export default observer(BoardDetailContainer);