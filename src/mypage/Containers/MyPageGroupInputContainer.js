import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class MyPageGroupInputContainer extends Component {
  render() {
    return (
      <div>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="그룹이름"/>
      <TextField
        id="outlined-uncontrolled"
        label="그룹 인원"/>
    </Box>
        {/* <form>
        그룹 이름 : <input type="text" name="name" placeholder="그룹 이름" /><br/>
        그룹 인원 : <input type="text" name="name" placeholder="그룹 인원" /><br/>
        </form> */}
      
      </div>
    );
  }
}

export default MyPageGroupInputContainer;