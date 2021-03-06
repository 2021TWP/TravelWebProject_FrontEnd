import React, { Component } from 'react';
import {observer} from 'mobx-react'
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
import BoardDetailContainer from '../../Board/Containers/BoardDetailContainer'
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import {TextField} from '@material-ui/core'
import MyPageStore from '../Stores/MyPageStore';
// import ApiRefPaginationGrid from '../Page/MyPageBoardPagenation';
// import ReactPaginate from 'react-paginate';

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


class MyPageBoardListView extends Component {

  

constructor(props) {
  super(props);
  this.state = {
    boards:""
  };

}
 
keywordChange = (e) =>{
  let nextState = {};;
  nextState[e.target.name] = e.target.value
  this.setState(nextState);
  // const kwd = e.target.value;
  // this.setState({keyword:kwd});
  // console.log(kwd)
}

    componentDidMount() {
        this.props.selectMypageAll()   // id??? ?????? ???????????? ???????????? 
  
    }




    render() {
        const { boards, boardStore, getAuthor, user , board , handlerFilterTextChange, filterText} = this.props;
          // this.props.board.user_id = sessionStorage.getItem("username")
 
        // getAuthor(this.props.board.id)



        return (
            <div>

                <h3>????????? ??????</h3>
                <Paper sx={{ width: '100%', overflow: 'hidden' }} >
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
          <TableRow>
            <TableCell>??????</TableCell>
            <TableCell align="right">?????????</TableCell>
            <TableCell align="right">?????? ??????</TableCell>
            <TableCell align="right">?????????</TableCell>
            <TableCell align="right">?????????</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

         {boards.map((board) => ( 
            <TableRow
              key={board.id}
              align={board.align}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => seperateBoard(board.id)} onLoad = {()=> getAuthor(board.user_id)}>
              <TableCell component="th" scope="row" onClick={()=>boardStore.selectBoard(board.id)}>{board.title}</TableCell>
              {/* <TableCell align="right" onClick={()=>this.boardStore.selectBoard(board.id)}>{board.user_id}</TableCell> */}
              {/* <input type="hidden" onload={()=>getAuthor(board.user_id)}/> */}
              {/* <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{board.user_id}</TableCell> */}
              {/* <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{user.id}</TableCell> */}
              <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{sessionStorage.getItem("username")}</TableCell>
              {/* <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{user.username}</TableCell> */}
              <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{moment(board.date).format(('YYYY. MM. DD.'))}</TableCell>
              <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{board.hit}</TableCell>
              <TableCell align="right" onClick={()=>boardStore.selectBoard(board.id)}>{board.like}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
            </TableContainer> <br/>
            <Stack spacing={1} alignItems= 'center' justify= 'center'>
      <Pagination  count={10} color="primary"  alignItems= 'center' justify= 'center'/>
    </Stack>
    <div>
    <TextField 
          // value={this.props.fillterText}
    
          // onChange = {(e)=>this.props.handlerFilterTextChange(e.target.value)}
          required
          name="keyword"
          id="outlined-required"
          label="??????"
          value={this.state.keyword}
          onChange = {this.keywordChange}
        /> 
          
 </div>
            </Paper>
<div>

</div>
            <div>

        
                <div>
                    {(boardStore.board.id !== undefined && boardStore.board.id > 0) && <BoardDetailContainer/>}
                </div>
            </div>

            </div>
        );
        
    }
}

export default observer(MyPageBoardListView);


// class MyPageBoardContainer extends Component {
    
//     render() {
        
//         return (
//             <div>
            
//             </div>
//         );
//     }
// }

// export default observer(MyPageBoardContainer);