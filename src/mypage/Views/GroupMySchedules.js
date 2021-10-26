import React, { Component } from 'react';


import {observer} from 'mobx-react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();



class GroupMySchedules extends Component {
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
              
            }}
            //지도 api 수정이 필요함
            image={"https://maps.googleapis.com/maps/api/staticmap?center="+schedule.lat+","+schedule.lng+"&zoom=12&size=400x400&key=AIzaSyChXubfqm80enfAcJT8xEqCXcXnhvVRz08"}
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
      
      <main>
        
        <Container sx={{ py: 8 }} maxWidth="md">
          
          <Grid container spacing={4}>
          {schedules}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
    );
  }
}

export default GroupMySchedules;