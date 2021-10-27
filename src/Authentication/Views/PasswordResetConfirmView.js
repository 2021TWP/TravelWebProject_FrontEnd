import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default class LoginView extends Component {
    render() {
        function Copyright(props) {
            return (
              <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                  여행하러가고싶조
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
          }
          
        const theme = createTheme();
        
        const { user, setProps, message, onClickEvent, handlePasswordResetConfirmSubmit, uid, token } = this.props
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon onClick={()=>window.location.href="/"}/>
            </Avatar>
            <Typography component="h1" variant="h5">
              비밀번호 초기화
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password1"
                label="비밀번호"
                type="password"
                id="password1"
                value={user.password1} 
                onChange={(e)=>setProps(e.target.name, e.target.value)}
                onClick={(e)=>onClickEvent("new_password1")}
              />
                {(message.new_password1 !== "")
                ? message.new_password1
                : null }
                <TextField
                margin="normal"
                required
                fullWidth
                name="password2"
                label="비밀번호 확인"
                type="password"
                id="password2"
                value={user.password2} 
                onChange={(e)=>setProps(e.target.name, e.target.value)}
                onClick={(e)=>onClickEvent("new_password2")}
              />
                {(message.new_password2 !== "")
                ? message.new_password2
                : null }
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handlePasswordResetConfirmSubmit(uid, token)}
              >
                변경
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );    
  }
}
