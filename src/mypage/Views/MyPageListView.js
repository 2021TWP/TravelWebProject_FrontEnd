import React, { Component } from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class MyPageListView extends Component {

  // componentDidMount(){
  //   this.props.selectMyInfoAll();
  // }
  render() {
    return (
      <div>
         <Card sx={{ maxWidth: 500}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          아이디 : {sessionStorage.getItem("username")}
          </Typography><br/>
          <Typography variant="body2" color="text.secondary">
          이름 : {sessionStorage.getItem("name")} <br/><br/>
          이메일: {sessionStorage.getItem("email")} 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
      </div>
    );
  }
}

export default MyPageListView;