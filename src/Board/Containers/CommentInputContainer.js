import React, { Component } from 'react';
import {observer} from 'mobx-react';
import CommentInputView from '../Views/CommentInputView';
import BoardStore from '../Stores/BoardStore';

class CommentInputContainer extends Component {
  render() {
    const {comment, commentAdd, commentModify, commentSetProps, comment_init , commentRemove } = BoardStore;
    return (
      <div>
          <h5>댓글 입력</h5>
          <CommentInputView comment= {comment} 
                            commentAdd={commentAdd} 
                            commentModify={commentModify} 
                            commentChange={commentSetProps}
                            commentRemove={commentRemove} 
                            init= {comment_init}/>
 
      </div>
    );
  }
}

export default observer(CommentInputContainer);