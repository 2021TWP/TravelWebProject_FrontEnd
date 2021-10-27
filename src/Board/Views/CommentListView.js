import React, { Component } from 'react';
import moment from 'moment';
import {BsPen} from 'react-icons/bs'
import {GrTrash} from 'react-icons/gr'

class CommentListView extends Component {
    render() {
        const {comment , onSelect , commentModify, commentRemove} = this.props;
        let comment_date = this.props.comment.date;
        return (
            <div onClick={()=>onSelect(comment)}>
                {comment.comment_content} &nbsp; &nbsp;
                {comment.user_id} &nbsp; &nbsp;
                {moment(comment_date).format(('YYYY. MM. DD.'))} &nbsp; &nbsp;
                {sessionStorage.getItem('id') == comment.user_id ?
                <span><BsPen onClick={()=>commentModify()}/> &nbsp;
                <GrTrash onClick={()=>commentRemove()}/></span> : <div></div>

                }

            </div>
        );
    }
}

export default CommentListView;