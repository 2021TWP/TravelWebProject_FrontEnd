import React, { Component } from 'react';
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

class BoardInputView extends Component {
    render() {
        const {board, boardAdd, boardChange, init, goBoardList} = this.props;

        return (
        <div>
          <Box sx={{m:1}}>
            <Box sx={{ width: '30%'}}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">게시판을 선택하세요</InputLabel>
                  <Select 
                  name="category_id"
                  onChange={(e)=>boardChange(e.target.name, e.target.value)}
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

            <br/> 
            <Box>
              <TextField 
                  style ={{width: '50%'}}
                  id="outlined-name"
                  name="title"
                  value={board.title} 
                  onChange={(e)=>boardChange(e.target.name, e.target.value)}
                  label="제목"/> 
            </Box>

            <br/>
            <Box>
              <TextField
                  style ={{width: '50%'}}
                  id="outlined-uncontrolled"
                  name="imgUrl"
                  value={board.imgUrl} 
                  onChange={(e)=>boardChange(e.target.name, e.target.value)}
                  label="사진"/> 
            </Box>
            
            <br/>
            <Box>
              <TextField
                  style ={{width: '50%'}}
                  id="outlined-name"
                  name="board_content"
                  value={board.board_content} 
                  onChange={(e)=>boardChange(e.target.name, e.target.value)}
                  label="내용"/> <br/>
            </Box>
          </Box>
          <br/>
          <Stack m={1} spacing={2} direction="row" >
              <CustomButton onClick={()=>boardAdd()}>글쓰기</CustomButton>
              <CustomButton onClick={()=>init()}>전부 지우기</CustomButton>
              <CustomButton onClick={() => goBoardList()}>뒤로 가기</CustomButton>
          </Stack>
          <br/><br/><br/><br/>
        </div>
        );
    }
}

export default BoardInputView;