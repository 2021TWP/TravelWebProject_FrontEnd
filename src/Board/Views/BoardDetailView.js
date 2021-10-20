import React, { Component } from 'react';
import moment from 'moment';
import BoardStore from '../Stores/BoardStore';
import {BsHandThumbsUp , BsHandThumbsUpFill} from 'react-icons/bs'

class BoardDetailView extends Component {
    render() {
        const {board, boardRemove, boardModify } = this.props;
        const {onCheckToggle , checked} = BoardStore
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
                {board.title} &nbsp;&nbsp;
                {board.schedule_id} &nbsp;&nbsp;
                {board.imgUrl} &nbsp;&nbsp;
                {board.user_id} &nbsp;&nbsp;
                {moment(board_date).format(('YYYY. MM. DD. HH:mm'))} &nbsp;&nbsp;
                {board.board_content} &nbsp;&nbsp;
                조회수 {board.hit} &nbsp;&nbsp;

                <button >좋아요 {board.like} </button>  &nbsp;&nbsp;
                {/* onClick={()=>boardLike()} */}

                <button onClick={()=>boardModify()}>MODIFY</button>
                <button onClick={()=>boardRemove()}>REMOVE</button> 
            </div>
        );
    }
}

export default BoardDetailView;