import React, { Component } from 'react';
import {GoogleMapReact} from 'google-map-react';
import {Paper,Typography,useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'


// 스타일을 넣수 있음.

class map extends Component {
  
  //모바일은 굳이 필요 없음
  render() {
    // const classes = useStyles();
    // const matches = useMediaQuery ('(min-width:600px)');
    const coordinates ={lat :0,lng:0};
    return (
      <div  >
        <GoogleMapReact
          bootstrapURLKeys ={{key:'AIzaSyBia_yPhh6dPfSXeDjntMpUKSqBJL0v4sE'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >

        </GoogleMapReact>
        
      </div>
    );
  }
}


export default map;