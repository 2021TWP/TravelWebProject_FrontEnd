import React, { Component } from 'react';

class BoardDetailView extends Component {
    render() {
        const {board} = this.props;

        return (
            <div>
                {board.category_id}
                {board.title}
                {board.schedule_id}
                {board.imgUrl}
                {board.user_id}
                {board.date} 
                {board.board_content}
                {board.hit}
                {board.like}
            </div>
        );
    }
}

export default BoardDetailView;