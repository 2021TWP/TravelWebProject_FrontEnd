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
import { useHistory } from "react-router-dom";

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

function GoBack(e) {
    window.history.go(-1);
}

class BoardUpdateView extends Component {
  
  boardStore = BoardStore

  componentDidMount(){
    // console.log(this.props.match.params.id)
    // this.boardStore.selectBoard(this.props.match.params.id);
    this.boardStore.boardSetProps(this.props.match.params.id);
    console.log(this.boardStore.board.id)
}
  
  render() {
    const { board, boardSetProps , boardModify , init} = this.boardStore;
    let history = useHistory;
    return (
        <div>
             <Box sx={{ minWidth: 50}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select 
        name="category_id"
        onChange={(e)=>this.boardStore.boardSetProps(e.target.name, e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
        >
          <MenuItem value="1">자유 게시판</MenuItem>
          <MenuItem value="2">여행 일지</MenuItem>
          <MenuItem value="3">번개 모임</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    > <br/> 
      <TextField
        id="outlined-name"
        name="title"
        value={board.title} 
        onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
        label="제목"/> <br/>

    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-uncontrolled"
        name="board_content"
        value={board.board_content} 
        onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
        label="내용"/> <br/>
    </Box>
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-uncontrolled"
        name="imgUrl"
        value={board.imgUrl} 
        onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
        label="사진"/> 
    </Box>

    <Stack spacing={2} direction="row">
        <CustomButton onClick={()=>boardModify()}>MODIFY</CustomButton>
        <CustomButton onClick={()=>init()}>초기화</CustomButton>
        <CustomButton onClick={() => GoBack()}>뒤로가기</CustomButton>
        <CustomButton onClick={() => GoBoardList()}>목록으로</CustomButton>

    </Stack>
        <br/><br/><br/><br/>
        </div>
    );
}
}

export default BoardUpdateView;