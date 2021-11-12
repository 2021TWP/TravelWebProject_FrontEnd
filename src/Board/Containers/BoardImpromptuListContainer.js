import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import BoardStore from '../Stores/BoardStore';
import Button from '@mui/material/Button';


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

class BoardImpromptuListContainer extends Component {

  boardStore = BoardStore;
  
  componentDidMount() {
    this.boardStore.selectImpromptu();
}

render() {
  const { boards, selectBoard, goBoardList, goHome, goCreateBoard, seperateBoard, goFree, goReview, goImpromptu } = this.boardStore;

  return (
      <div>
          <br/>
          <Stack m={1} spacing={3} justifyContent="center" alignItems="center" direction="row">
          <Button size="large" onClick={() => goFree()}> 자유 게시판 </Button> &nbsp; 
          <Button size="large" onClick={() => goReview()}> 여행 일지 </Button> &nbsp;
          <Button size="large" onClick={() => goImpromptu()}> 번개 모임 </Button> 
          </Stack>


  <TableContainer component={Paper}>
          <Table sx={{ width: '80%', margin: 'auto' }} aria-label="simple table">
          <TableHead>
    <TableRow>
      <TableCell>제목</TableCell>
      <TableCell align="right">글쓴이</TableCell>
      <TableCell align="right">작성 날짜</TableCell>
      <TableCell align="right">조회수</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>

   {boards.map((board) => (
      <TableRow
        key={board.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => seperateBoard(board.id)}>
        <TableCell component="th" scope="row" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.title}</TableCell>
        <TableCell align="right" onClick={()=>selectBoard(board.id)}>{board.user_id}</TableCell>
        <TableCell align="right" onClick={()=>selectBoard(board.id)}>{moment(board.date).format(('YYYY. MM. DD.'))}</TableCell>
        <TableCell align="right" onClick={()=>selectBoard(board.id)}>{board.hit}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  </Table>
  </TableContainer> <br/>
      <div>
          <Stack m={1} spacing={2} direction="row">
              <CustomButton onClick={() => goCreateBoard()}>글쓰기</CustomButton> &nbsp;
              <CustomButton onClick={() => goBoardList()}>전체 게시판으로</CustomButton> &nbsp;
              <CustomButton onClick={() => goHome()}>홈으로</CustomButton>
          </Stack>
      </div>

  </div>
  );
}
}

export default observer(BoardImpromptuListContainer);