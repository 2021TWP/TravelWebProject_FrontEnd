import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentListView from '../Views/CommentListView';
import CommentInputContainer from './CommentInputContainer';
import CommentListContainer from './CommentListContainer';

class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board, boardRemove , boardModify, comment, selectComment} = this.boardStore;
        return (
            <div>
                <h3>게시글 상세</h3>
                <BoardDetailView 
                board={board}
                boardModify = {boardModify}
                boardRemove={boardRemove} />
                <CommentInputContainer/>
                <CommentListContainer board_id={board.id} />
            </div>
        );
    }
}

export default observer(BoardDetailContainer);