import React, { Component } from 'react';
import {observer} from 'mobx-react'
import boardStore from '../Stores/BoardStore';
import BoardInputView from '../Views/BoardInputView';

class BoardInputContainer extends Component {

    render() {
        const {board, boardAdd, boardModify, boardSetProps, init, goBoardList} = boardStore;

        return (
            <div>
                <h3>게시판 글쓰기</h3>
                <BoardInputView 
                board={board}
                boardAdd={boardAdd}
                boardModify={boardModify}
                boardChange={boardSetProps}
                init={init}
                goBoardList={goBoardList}/>
            </div>
        );
    }
}

export default observer(BoardInputContainer);