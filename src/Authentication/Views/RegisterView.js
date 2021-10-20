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
        

class RegisterView extends Component {
    render() {
        const { setProps, handleRegisterSubmit, user, message, onClickEvent } = this.props
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
                회원가입
                </Typography>
                <Box sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="아이디"
                    name="username"
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
                    value={user.password1} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                    onClick={(e)=>onClickEvent(e.target.name)}
                />
                    {(message.password1 !== "")
                    ? message.password1
                    : null }
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password2"
                    label="비밀번호"
                    type="password"
                    id="password2"
                    value={user.password2} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                    onClick={(e)=>onClickEvent(e.target.name)}
                />
                    {(message.password2 !== "")
                    ? message.password2
                    : null }
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="이름"
                    name="name"
                    value={user.name} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                    onClick={(e)=>onClickEvent(e.target.name)}
                />
                {(message.name !== "")
                    ? message.name
                    : null }
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    value={user.email} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                    onClick={(e)=>onClickEvent(e.target.name)}
                />
                {(message.email !== "")
                    ? message.email
                    : null }
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={()=>handleRegisterSubmit()}
                >
                    회원가입
                </Button>
                <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  이미 회원이십니까? 로그인하러 가기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
        );    
            // <div>
            //     <input type="text" name="username" value={user.username} placeholder="아이디" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
            //     {message.username}<br/>
            //     <input type="password" name="password1" value={user.password} placeholder="비밀번호" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
            //     {message.password1}<br/>
            //     <input type="password" name="password2" value={user.password2} placeholder="비밀번호 확인" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
            //     {message.password2}{message.non_field_errors}<br/>
            //     <input type="text" name="name" value={user.name} placeholder="이름" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>              
            //     {message.name}<br/>
            //     <input type="email" name="email" value={user.email} placeholder="Email" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
            //     {message.email}<br/>
            //     <button onClick={()=>handleRegisterSubmit()}>회원가입</button>
            //     <button>돌아가기</button>
            // </div>
    }
}

export default RegisterView;