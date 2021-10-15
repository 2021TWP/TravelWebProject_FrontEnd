import React, { Component } from 'react';

class BoardItemView extends Component {
    render() {
        const {board, onSelect} = this.props;
        return (
            <div>
                <div onClick={()=>onSelect(board)}>
                {board.title} &nbsp; &nbsp;
                {board.user_id} &nbsp; &nbsp;
                {board.date} &nbsp; &nbsp;
                {board.hit} &nbsp; &nbsp;
                {board.like}
                </div>
            </div>
        );
    }
}

export default BoardItemView;