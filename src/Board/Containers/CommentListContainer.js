import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import CommentListView from '../Views/CommentListView';

class CommentListContainer extends Component {
  boardStore = BoardStore;

//   componentDidMount(){
//     this.boardStore.selectBoardComment();
// }

  render() {
    const {comments , selectComment , commentModify, commentRemove} = this.boardStore;
    console.log(comments)
    const commentList = comments.map(comment => {
        return (
          // <CommentListView key={comment.id} comment={comment} onSelect={selectBoardComment}/>
          <CommentListView key={comment.id} comment={comment} onSelect= {selectComment} commentModify={commentModify} commentRemove={commentRemove}/> //comment하나 

          // <CommentListView key={comment.id} comment={comment} onSelect={selectCommentAll}/>

                  )
    });
    return (
        <div>
            <h5>답변 목록</h5>
            {commentList}
            {/* {board.id === this.comment.board_id ? commentList : ""} */}
          
        </div>
    );
}
}

export default observer(CommentListContainer);