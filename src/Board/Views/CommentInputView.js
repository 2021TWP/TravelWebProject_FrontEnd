
import React, { Component } from 'react';

class CommentInputView extends Component {
  render() {
    const {comment, commentAdd, commentModify, commentChange, commentRemove, init} = this.props;
    return (
      <div>
                <input
                    type="text" 
                    name="comment_content"
                    value={comment.comment_content} 
                    onChange={(e)=>commentChange(e.target.name, e.target.value)}
                    placeholder="내용"/><br/>


                <button onClick={()=>commentAdd()}>ADD</button>
                <button onClick={()=>commentModify()}>MODIFY</button>
                <button onClick={()=>commentRemove()}>REMOVE</button> 
                <button onClick={()=>init()}>초기화</button>
      </div>
    );
  }
}

export default CommentInputView;