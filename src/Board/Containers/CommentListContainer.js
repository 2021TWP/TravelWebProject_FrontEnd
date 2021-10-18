import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import CommentListView from '../Views/CommentListView';

class CommentListContainer extends Component {
  boardStore = BoardStore;
  componentDidMount(){
    this.boardStore.selectCommentAll();
}

  render() {
    const {comments, selectComment} = this.boardStore;
    const commentList = comments.map(comment => {
        return (
          <CommentListView key={comment.id} comment={comment} onSelect={selectComment}/>        )
    });
    return (
        <div>
            <h3>게시글 목록</h3>
            {commentList}
        </div>
    );
}
}

export default observer(CommentListContainer);