import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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
        
        const { user, setProps, handleLoginSubmit, message, onClickEvent } = this.props
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
              로그인
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="아이디"
                name="username"
                autoComplete="email"
                value={user.username} 
                onChange={(e)=>setProps(e.target.name, e.target.value)}
                onClick={(e)=>onClickEvent(e.target.name)}
              />
              {(message.username !== "")
                ? message.username
                : null }
              <TextField
                margin="normal"
                required
                fullWidth
                name="password1"
                label="비밀번호"
                type="password"
                id="password1"
                autoComplete="current-password"
                value={user.password1} 
                onChange={(e)=>setProps(e.target.name, e.target.value)}
                onClick={(e)=>onClickEvent('password')}
              />
                {(message.password !== "")
                ? message.password
                : null }
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handleLoginSubmit()}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/authentication/password/reset/" variant="body2">
                    비밀번호 찾기
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/authentication/signup/" variant="body2">
                    {"회원가입"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );    
            
            
            
            // <div>
            //     <input type="text" name="username" placeholder="아이디" value={user.username} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
            //     {message.username}<br/>
            //     <input type="password" name="password1" placeholder="비밀번호" value={user.password1} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
            //     {message.password}<br/>
            //     <button onClick={()=>handleLoginSubmit()}>로그인</button>
            //     <button>회원 가입</button>
            //     <a onClick={()=>handleLogoutSubmit()}>로그아웃</a>
            //     <button onClick={()=>{test()}}>테스트</button>
            // </div>
    }
}
