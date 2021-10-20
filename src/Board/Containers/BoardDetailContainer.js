import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentListView from '../Views/CommentListView';

class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board, boardRemove, boardLike} = this.boardStore;
        return (
            <div>
                <h3>게시글 상세</h3>
                <BoardDetailView 
                board={board}
                boardRemove={boardRemove}
                boardLike={boardLike} />

                <CommentInputContainer/>
                {/* {comment.length > 0 && <CommentListContainer />} */}
                {/* {board.id === comment.board_id ? <CommentListContainer /> : ""} */}
                <CommentListContainer />

            </div>
        );
    }
}

export default observer(BoardDetailContainer);