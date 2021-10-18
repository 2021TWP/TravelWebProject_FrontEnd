import React, { Component } from 'react';
import moment from 'moment';

class CommentListView extends Component {
    render() {
        const {comment, onSelect} = this.props;
        let comment_date = this.props.comment.date;
        return (
            <div>
                <div onClick={()=>onSelect(comment)}>
                {comment.comment_content} &nbsp; &nbsp;
                {moment(comment_date).format(('YYYY년 MM월 DD일'))} &nbsp; &nbsp;
                </div>
            </div>
        );
    }
}

export default CommentListView;