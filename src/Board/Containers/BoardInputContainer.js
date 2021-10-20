import React, { Component } from 'react';
import {observer} from 'mobx-react'
import boardStore from '../Stores/BoardStore';
import BoardInputView from '../Views/BoardInputView';

class BoardInputContainer extends Component {

    render() {
        const {board, boardAdd, boardModify, boardSetProps, init} = boardStore;

        return (
            <div>
                <h3>게시글 입력</h3>
                <BoardInputView 
                board={board}
                boardAdd={boardAdd}
                boardModify={boardModify}
                boardChange={boardSetProps}
                init={init}/>
            </div>
        );
    }
}

export default observer(BoardInputContainer);