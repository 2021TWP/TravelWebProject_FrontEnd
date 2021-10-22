import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import CommentListView from '../Views/CommentListView';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const CustomButtonRoot = styled('span')(`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }


function GoBoardList(e) {
    window.location.href = '/board/list/';
}


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
            <h5>댓글 목록</h5>
            {commentList}
            {/* {board.id === this.comment.board_id ? commentList : ""} */}
  
        </div>
    );
}
}

export default observer(CommentListContainer);