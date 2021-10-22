import React, { Component } from 'react';
import {observer} from 'mobx-react';

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


class ScheduleListView extends Component {
  
  
  componentDidMount(){
    this.props.selectAll();
  }

  detailSchedule(id){
    console.log(id);
    window.location.href =`/schedules/detail/${id}`;
  }
  createSchedule(e){
    window.location.href ="/schedules/create/"
  }
//해야할일 클릭하면 디테일로 넘어가는거 해보기...
  render() {
    const {scheduleList,selectSchedule} =this.props;
    console.log(scheduleList);
    const schedules = scheduleList.map(schedule =>{
      return ( <Grid item key={schedule.id} xs={12} sm={6} md={4}>
        <Card
        onSelect={()=>selectSchedule(schedule.id)}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia 
            component="img"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image=""
          />
          <CardContent onClick={()=>console.log(schedule.id)}  sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {schedule.title}
            </Typography>
            <Typography>
              {schedule.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>this.detailSchedule(schedule.id)}>View</Button>
          </CardActions>
        </Card>
      </Grid>)
    }) ;

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar background ="#BEDDBF">
          <Typography variant="h6" color="inherit" noWrap>
          <Button color='inherit' onClick={()=>this.createSchedule()}>create</Button>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Schedule List
            </Typography>
           <Typography variant="h5" align="center" color="text.secondary" paragraph>
             {/* 페이지에대한 설명...??? */}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {schedules}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    );
  }
}

export default observer(ScheduleListView);