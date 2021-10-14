import React, { Component } from 'react';
import {observer} from 'mobx-react'
import boardStore from '../Stores/BoardStore';
import BoardInputView from '../Views/BoardInputView';

class BoardInputContainer extends Component {

    render() {
        const {board, boardAdd, boardRemove, boardModify, boardSetProps} = boardStore;

        return (
            <div>
                <BoardInputView 
                board={board}
                boardAdd={boardAdd}
                boardRemove={boardRemove}
                boardModify={boardModify}
                boardChange={boardSetProps}/>
            </div>
        );
    }
}

export default observer(BoardInputContainer);