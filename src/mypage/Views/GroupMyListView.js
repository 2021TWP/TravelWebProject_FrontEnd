import React, { Component } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import moment from 'moment';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Button from '@mui/material/Button';

/////////////////////////////////Import Account///////////////////////////////////


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


class GroupMyListView extends Component {
  withdrawGroup(g_id) {
    this.props.handleGroupWithdrawlSubmit(g_id);
  }
  moveToDetail(g_id){
    window.location.href =`/mypage/mygroup/detail/${g_id}`
  }
  
  render() {
    return (

      <TableRow
      onClick ={()=> this.moveToDetail(this.props.group.id)}
        key={this.props.group.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        
          <TableCell align="left">{this.props.group.id}</TableCell>
          <TableCell component="th" scope="row" align='left'>{this.props.group.group_name}</TableCell>
          <TableCell align="right">{moment(this.props.group.created_date).format(('YYYY. MM. DD.'))}</TableCell>

        
        <TableCell style={{pedding: '8 px' }} align="center"><Button  fontSize="small" onClick={()=>this.withdrawGroup(this.props.group.id)}>??????</Button></TableCell>
          </TableRow>
    );
  }
}

export default GroupMyListView;


// class MyPageBoardContainer extends Component {

//     render() {

//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default observer(MyPageBoardContainer);
