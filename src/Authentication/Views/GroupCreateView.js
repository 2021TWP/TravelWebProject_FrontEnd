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
import GroupsIcon from '@mui/icons-material/Groups';

export default class LoginView extends Component {
    render() {
        const theme = createTheme();
        
        const { handleCreateGroupSubmit, group, setProps } = this.props
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
              <GroupsIcon fontSize="large" onClick={()=>window.location.href="/"}/>
            </Avatar>
            <Typography component="h1" variant="h5">
              그룹 생성
            </Typography>
            <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="group_name"
                    label="그룹 명"
                    name="group_name"
                    value={group.gorup_name} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="pin"
                    type="password"
                    label="PIN"
                    id="pin"
                    value={group.pin} 
                    onChange={(e)=>setProps(e.target.name, e.target.value)}
                />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handleCreateGroupSubmit()}
              >
                그룹 생성
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
        ); 
    }   
}
