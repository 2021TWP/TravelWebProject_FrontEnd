import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

import ScheduleStore from "../../Schedule/stores/ScheduleStore";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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

class GroupMyDetailView extends Component {
  scheduleStore = ScheduleStore;
  

  detailSchedule(g_id,id){
    window.location.href =`/mypage/mygroup/detail/${g_id}/${id}/`;
  }
  createSchedule(g_id){
    window.location.href =`/mypage/mygroup/create/${g_id}`;
  }

  render() {
    const {scheduleList,selectSchedule,g_id} =this.props;

    
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
            <Button size="small" onClick={()=>this.detailSchedule(g_id,schedule.id)}>View</Button>
          </CardActions>
        </Card>
      </Grid>)
    }) ;

    return (
      <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {/* {this.props.group.group_name} */}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      
    </Card>

    <Container sx={{ py: 8 }} maxWidth="md">
    <Button onClick={() => this.createSchedule(g_id)}>스케줄 생성</Button>

          <Grid container spacing={4}>
          {schedules}
          </Grid>
        </Container>

        
      </div>
    );
  }
}

export default GroupMyDetailView;