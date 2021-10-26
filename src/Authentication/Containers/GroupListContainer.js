import React, { Component } from 'react';
import {observer} from 'mobx-react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
/////////////////////////////////Import Account///////////////////////////////////
import AccountStore from '../Stores/AccountStore';
import GroupListView from '../Views/GroupListView';
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GroupSearchView from '../Views/GroupSearchView';

/////////////////////////////////////////Design Started/////////////////////////////////////
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

////////////////////////////////////Design End//////////////////////////////////////////////////

class GroupListContainer extends Component {
    componentDidMount() {
      this.accountStore.showAllGroups();   // 모든 그룹
      this.accountStore.showMyGroups();
    }
    
    accountStore = AccountStore

    render() {
        const rows = []
        const {groups, showAllGroups, users, usersInGroup, handleGroupJoinSubmit, showMyGroups, myGroups, myGroupsId, handleGroupWithdrawlSubmit} = this.accountStore;
        groups.forEach(group=>{
          if (group.group_name.indexOf(this.accountStore.search) === -1 && group.id.toString().indexOf(this.accountStore.search) === -1) {
            return;
          }
          rows.push(
            <GroupListView  group={group}
                            key={group.id}
                            showAllGroups={showAllGroups}
                            usersInGroup={usersInGroup}
                            users={users}
                            handleGroupJoinSubmit={handleGroupJoinSubmit}
                            showMyGroups={showMyGroups}
                            myGroups={myGroups}
                            myGroupsId={myGroupsId}
                            handleGroupWithdrawlSubmit={handleGroupWithdrawlSubmit}/>
          )
        })

        
      const theme = createTheme();
        
        return (
            
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div>
                  <h3>그룹 목록</h3> 
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>그룹 명</TableCell>
                            <TableCell align="right">생성 날짜</TableCell>
                            <TableCell align="right"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows}
                        </TableBody>
                      </Table>
                    </TableContainer> <br/>
                    <GroupSearchView  setProps={this.accountStore.setProps}
                                      search={this.accountStore.search}/>
                  </div>
                </Box>
            </Container>
          </ThemeProvider> 
        );
    }
}

export default observer(GroupListContainer);