import React, { Component } from 'react';
import moment from 'moment';
import {BsPen} from 'react-icons/bs'
import {GrTrash} from 'react-icons/gr'

class CommentListView extends Component {
    render() {
        const {comment , onSelect , commentModify, commentRemove} = this.props;
        let comment_date = this.props.comment.date;
        return (
            <div>
                <div onClick={()=>onSelect(comment)}>
                    {comment.comment_content} &nbsp; &nbsp;
                    {moment(comment_date).format(('YYYY. MM. DD.'))} &nbsp; &nbsp;
                    {comment.user_id} &nbsp; &nbsp;
                {/* {board.id === comment.board_id ? comment.comment_content : ""} &nbsp; &nbsp;
                {board.id === comment.board_id ? moment(comment_date).format(('YYYY년 MM월 DD일')) : ""} &nbsp; &nbsp;
                {board.id === comment.board_id ? comment.user_id : ""} */}
                <BsPen onClick={()=>commentModify()}/> &nbsp;
                {/* <button onClick={()=>commentModify()}>MODIFY</button> */}
                <GrTrash onClick={()=>commentRemove(comment.id)}/>
                </div>
                {/* <button onClick={()=>commentRemove()}>REMOVE</button>  */}
    
            </div>
        );
    }
}

export default CommentListView;