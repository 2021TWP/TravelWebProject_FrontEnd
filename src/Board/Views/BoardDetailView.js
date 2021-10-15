import React, { Component } from 'react';

class BoardDetailView extends Component {
    render() {
        const {board, boardRemove} = this.props;

        return (
            <div>
                {board.category_id} &nbsp;&nbsp;
                {board.title} &nbsp;&nbsp;
                {board.schedule_id} &nbsp;&nbsp;
                {board.imgUrl} &nbsp;&nbsp;
                {board.user_id} &nbsp;&nbsp;
                {board.date} &nbsp;&nbsp;
                {board.board_content} &nbsp;&nbsp;
                {board.hit} &nbsp;&nbsp;
                {board.like} &nbsp;&nbsp;

                <button>MODIFY</button>
                <button onClick={()=>boardRemove()}>REMOVE</button> 
            </div>
        );
    }
}

export default BoardDetailView;