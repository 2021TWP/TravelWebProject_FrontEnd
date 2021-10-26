import React, { Component } from 'react';
import moment from 'moment';
import BoardStore from '../../Board/Stores/BoardStore';
import MyPageStore from '../Stores/MyPageStore';

class MyPageBoardItemView extends Component {
    boardStore = BoardStore
    mypageStore = MyPageStore

    render() {
        // const {board, selectBoard} = this.props; 
        const {board} = this.mypageStore
        const {selectBoard} = this.boardStore
        // let board_date = this.props.board.board_date;
        return (
            <div>
                <div onClick={()=>selectBoard(board.id)}>
                {this.mypageStore.board.title} &nbsp; &nbsp;
                {this.mypageStore.board.user_id} &nbsp; &nbsp;
                {moment(board.board_date).format(('YYYY. MM. DD.'))} &nbsp; &nbsp;
                조회수 {this.mypageStore.board.hit} &nbsp; &nbsp;
                좋아요 {this.mypageStore.board.like}
                </div>
            </div>
        );
    }
}

export default MyPageBoardItemView;;



// class MyPageBoardView extends Component {
    
//     render() {
       
//         return (
//             <div>
              
//             </div>
//         );
//     }
// }

// export default MyPageBoardView;;