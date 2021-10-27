import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import BoardDetailContainer from '../Containers/BoardDetailContainer';

class SeperateBoardList extends Component {
    boardStore = BoardStore
    
    componentDidMount(){
        this.boardStore.selectBoard(this.props.match.params.id);
        this.boardStore.selectBoardComment(this.props.match.params.id);
    }

    render() {
        
        return (
            <div>
            
               {(this.boardStore.board.id !== undefined && this.boardStore.board.id > 0) && <BoardDetailContainer/>}
                </div>
            
        );
    }
}

export default observer(SeperateBoardList);