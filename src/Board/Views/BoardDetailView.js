import React, { Component } from 'react';
import moment from 'moment';

class BoardDetailView extends Component {
    render() {
        const {board, boardRemove} = this.props;
        let board_date = this.props.board.date;
        let category_id = this.props.board.category_id
        return (
            <div> {
                (function() {
                  if (category_id === 1) return ("자유게시판");
                  if (category_id === 2) return ("여행 일지");
                  if (category_id === 3) return ("번개모임");
                })()
                
              } &nbsp;&nbsp;
                {/* {board.category_id} &nbsp;&nbsp; */}
                {board.title} &nbsp;&nbsp;
                {board.schedule_id} &nbsp;&nbsp;
                {board.imgUrl} &nbsp;&nbsp;
                {board.user_id} &nbsp;&nbsp;
                {/* {board.date} &nbsp;&nbsp; */}
                {moment(board_date).format(('YYYY년 MM월 DD일'))} &nbsp;&nbsp;
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