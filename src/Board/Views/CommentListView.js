import React, { Component } from 'react';
import moment from 'moment';

class CommentListView extends Component {
    render() {
        const {comment , onSelect , commentModify, commentRemove} = this.props;
        let comment_date = this.props.comment.date;
        return (
            <div>
                <div onClick={()=>onSelect(comment)}>
                    {comment.comment_content} &nbsp; &nbsp;
                    {moment(comment_date).format(('YYYY. MM. DD.'))} &nbsp; &nbsp;
                    {comment.user_id}
                {/* {board.id === comment.board_id ? comment.comment_content : ""} &nbsp; &nbsp;
                {board.id === comment.board_id ? moment(comment_date).format(('YYYY년 MM월 DD일')) : ""} &nbsp; &nbsp;
                {board.id === comment.board_id ? comment.user_id : ""} */}
                <button onClick={()=>commentModify()}>MODIFY</button>
                <button onClick={()=>commentRemove()}>REMOVE</button> 
                </div>
            </div>
        );
    }
}

export default CommentListView;