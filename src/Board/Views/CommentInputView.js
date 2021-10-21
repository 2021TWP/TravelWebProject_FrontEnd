
import React, { Component } from 'react';
import BoardStore from '../Stores/BoardStore';
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



class CommentInputView extends Component {
  render() {
    const {board} = BoardStore
    const {comment, commentAdd, commentModify, commentChange, init} = this.props;
    return (
      <div>

         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    > <br/> 
      <TextField
        id="outlined-name"
        name="comment_content"
        value={comment.comment_content} 
        onChange={(e)=>commentChange(e.target.name, e.target.value)}
        label="댓글 내용"/> <br/>

    </Box>

    <Stack spacing={2} direction="row">
        <CustomButton onClick={()=>commentAdd()}>ADD</CustomButton>
        <CustomButton onClick={()=>commentModify()}>MODIFY</CustomButton>

        {/* <CustomButton onClick={()=>boardModify()}>MODIFY</CustomButton> */}
        <CustomButton onClick={()=>init()}>초기화</CustomButton>
    </Stack>

      </div>
    );
  }
}

export default CommentInputView;