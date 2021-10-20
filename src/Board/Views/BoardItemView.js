import React, { Component } from 'react';
import moment from 'moment';

class BoardItemView extends Component {
    
    render() {
        const {board, onSelect} = this.props; 
        let board_date = this.props.board.date;
        return (
            <div>
                <div onClick={()=>onSelect(board.id)}>
                {board.title} &nbsp; &nbsp;
                {board.user_id} &nbsp; &nbsp;
                {moment(board_date).format(('YYYY. MM. DD.'))} &nbsp; &nbsp;
                조회수 {board.hit} &nbsp; &nbsp;
                좋아요 {board.like}
                </div>
            </div>
        );
    }
}

export default BoardItemView;;