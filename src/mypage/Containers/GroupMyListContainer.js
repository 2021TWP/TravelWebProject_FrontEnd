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
import AccountStore from '../../Authentication/Stores/AccountStore';
import GroupMyListView from '../Views/GroupMyListView';
import GroupMySearchView from '../Views/GroupMySearchView';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/////////////////////////////////////////Design Started/////////////////////////////////////
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

class GroupMyListContainer extends Component {
    componentDidMount() {
      this.accountStore.showMyGroups();   // 모든 그룹
    }
    
    accountStore = AccountStore

    render() {
        const rows = []
        const {users, usersInGroup, showMyGroups, myGroups, handleGroupWithdrawlSubmit} = this.accountStore;
        myGroups.forEach(group=>{
          if (group.group_name.indexOf(this.accountStore.search) === -1 && group.id.toString().indexOf(this.accountStore.search) === -1) {
            return;
          }
          rows.push(
            <GroupMyListView  group={group}
                            key={group.id}
                            usersInGroup={usersInGroup}
                            users={users}
                            showMyGroups={showMyGroups}
                            myGroups={myGroups}
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
                    <GroupMySearchView  setProps={this.accountStore.setProps}
                                      search={this.accountStore.search}/>
                  </div>
                </Box>
            </Container>
          </ThemeProvider> 
        );
    }
}

export default observer(GroupMyListContainer);