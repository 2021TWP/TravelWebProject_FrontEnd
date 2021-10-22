import React, { Component } from 'react';

import BoardStore from '../Stores/BoardStore';




class BoardDetailPage extends Component {
    boardStore = BoardStore

    render() {
    
        const {board, selectBoard} = this.props; 

       
        return (
            <div>
               {/* {(this.boardStore.board.id !== undefined && this.boardStore.board.id > 0) && <BoardDetail} */}
                </div>
            
        );
    }
}

export default BoardDetailPage;;