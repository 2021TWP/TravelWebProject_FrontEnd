import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentListView from '../Views/CommentListView';

class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board, boardRemove} = this.boardStore;
        return (
            <div>
                <h3>게시글 상세</h3>
                <BoardDetailView 
                board={board}
                boardRemove={boardRemove}
                 />
                <CommentListView />
            </div>
        );
    }
}

export default observer(BoardDetailContainer);