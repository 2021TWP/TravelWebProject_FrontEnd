import React, { Component } from 'react';

class BoardItemView extends Component {
    render() {
        const {board, onSelect} = this.props;
        return (
            <div onClick={()=>onSelect(board)}>
                {board.title}
                {board.user_id}
                {board.date}
                {board.hit}
                {board.like}
            </div>
        );
    }
}

export default BoardItemView;