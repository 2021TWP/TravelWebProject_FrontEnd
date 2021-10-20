import React, { Component } from 'react';
import moment from 'moment';
import BoardStore from '../Stores/BoardStore';

class BoardItemView extends Component {
    
    render() {
        const {board, onSelect} = this.props; 

        let board_date = this.props.board.date;
        return (
            <div>
                <div onClick={()=>onSelect(board.id)} >
                {board.title} &nbsp; &nbsp;
                {board.user_id} &nbsp; &nbsp;
                {moment(board_date).format(('YYYY년 MM월 DD일'))} &nbsp; &nbsp;
                {board.hit} &nbsp; &nbsp;
                {board.like}
                </div>
            </div>
        );
    }
}

export default BoardItemView;;