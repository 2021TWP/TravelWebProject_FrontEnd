import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BoardStore from '../Stores/BoardStore';
import BoardItemView from '../Views/BoardItemView';
import BoardDetailContainer from './BoardDetailContainer';
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

function seperateBoard(id) {
    console.log(id);
    window.location.href =
    `/board/detail/${id}`;
}

function createBoard(e) {
    window.location.href = '/board/create/';
}

function GoHome(e) {
  window.location.href = '/';
}


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

class BoardListContainer extends Component {
    boardStore = BoardStore;

    componentDidMount() {
        this.boardStore.selectAll();
    }

    render() {
        const { boards, selectBoard, checked , selectAll} = this.boardStore;
        // selectAll()
        
        // const boardList = boards.map(board => { 
        //     return (
        //         <span onClick={() => seperateBoard(board.id)}><BoardItemView key={board.id} board={board} checked={checked} checked_id={checked.id} selectBoard={()=>selectBoard(board.id)} /></span>
        //     )
        // });
        return (
            <div>
                  <a href = "/board/free"> 자유게시판 </a> &nbsp; 
                    <a href = "/board/review"> 후기게시판 </a> &nbsp;
                    <a href = "/board/impromptu/"> 번개모임 </a>
                <h3>게시글 목록</h3>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell align="right">글쓴이</TableCell>
            <TableCell align="right">작성 날짜</TableCell>
            <TableCell align="right">조회수</TableCell>
            <TableCell align="right">좋아요</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

         {boards.map((board) => (
            <TableRow
              key={board.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => seperateBoard(board.id)}>
              <TableCell component="th" scope="row" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.title}</TableCell>
              <TableCell align="right" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.user_id}</TableCell>
              <TableCell align="right" onClick={()=>this.boardStore.selectBoard(board.id)}>{moment(board.date).format(('YYYY. MM. DD.'))}</TableCell>
              <TableCell align="right" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.hit}</TableCell>
              <TableCell align="right" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.like}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
            </TableContainer> <br/>
            <div>
                <div>
                    {/* <a href = "/board/free"> 자유게시판 </a> &nbsp;  */}
                    {/* <a href = "/board/review"> 후기게시판 </a> &nbsp; */}
                    {/* <a href = "/board/impromptu/"> 번개모임 </a> */}
                    {/* <h3>게시글 목록</h3> */}
                    {/* {boardList} */}
                    <Stack spacing={2} direction="row">
                        <CustomButton onClick={() => createBoard()}>글쓰기</CustomButton> &nbsp; 
                        <CustomButton onClick={() => GoHome()}>홈</CustomButton>

                    </Stack>

                    {/* <button type="button" onClick={() => createBoard()}>글쓰기</button> */}
                </div>
            
                <div>
                    {(this.boardStore.board.id !== undefined && this.boardStore.board.id > 0) && <BoardDetailContainer/>}
                </div>
            </div>

            </div>
        );
    }
}



export default observer(BoardListContainer);