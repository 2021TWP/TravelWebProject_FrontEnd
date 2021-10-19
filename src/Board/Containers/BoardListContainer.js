import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import BoardItemView from '../Views/BoardItemView';
import BoardDetailContainer from './BoardDetailContainer';

class BoardListContainer extends Component {
    boardStore = BoardStore;

    componentDidMount(){
        this.boardStore.selectAll();
    }

    render() {
        const {boards, selectBoard} = this.boardStore;
        const boardList = boards.map(board => {
            return (
                <BoardItemView key={board.id} board={board} onSelect={selectBoard}/>
            )
        });
        return (
            <div>
            <div>
                <h3>게시글 목록</h3>
                {boardList}
            </div>
            <div>
                {(this.boardStore.board.id !== undefined && this.boardStore.board.id > 0) && <BoardDetailContainer/>}
            </div>
            </div>
        );
    }
}

export default observer(BoardListContainer);