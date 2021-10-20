import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentListView from '../Views/CommentListView';

class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board} = this.boardStore;
        return (
            <div>
                <BoardDetailView board={board} />
                <CommentListView />
            </div>
        );
    }
}

export default observer(BoardDetailContainer);