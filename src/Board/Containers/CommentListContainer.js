import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import CommentListView from '../Views/CommentListView';


class CommentListContainer extends Component {
  boardStore = BoardStore;

  render() {
    const {comments , selectComment , commentModify, commentRemove} = this.boardStore;
    console.log(comments)
    const commentList = comments.map(comment => {
        return (
          <CommentListView key={comment.id} comment={comment} onSelect= {selectComment} commentModify={commentModify} commentRemove={commentRemove}/> //comment하나 
        )
    });
    return (
        <div>
          <br/><br/>
            {commentList}  
        </div>
    );
}
}

export default observer(CommentListContainer);