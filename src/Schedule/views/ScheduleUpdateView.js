import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import MapContainer from '../../Map/MapContainer';
import { Button, Paper, Box, InputBase, Grid, Input,  Stack, InputAdornment, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { getPlaceData } from '../api/getApi'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ScheduleStore from '../stores/ScheduleStore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function createSchedule(e){
  window.location.href ="/schedules/create/"
}
class ScheduleUpdateView extends Component {
  scheduleStore = ScheduleStore;
  componentDidMount(){
    this.scheduleStore.selectSchedule(this.props.match.params.id);//라우터에서 포함을 하고 있기 때문에(상위 컴포넌트가 router이기 떄문에.)
    this.scheduleStore.selectAll_content();
  }
  
  render() {
    const {schedule,contentList, content,handlerSetProps_schedule,
      selectAll_content, addContent,deleteContent,updateContent,
      selectContent,addSchedule,updateSchedule}=this.scheduleStore;
    
    const contents = contentList.map(content =>{
      console.log(content.id);
      return(
        <TextField key ={content.id} value={content.content} 
        InputProps={{
          readOnly: true,
        }}
        onClick={()=>selectContent}/>
      )
    });

    return (
      <div>
        <Button onClick={createSchedule}>create</Button>
        <Button onClick={updateSchedule}>modify</Button>
        <MapContainer />

        

{/* 여긴 날짜 갖고 오는 부분 */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              readOnly
              label="start_date"
              value ={schedule.start_date}
              // value={schedule.start_date}
              onChange={st_date => {
                this.setState({ st_date });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="end_date"
              readOnly
              value ={schedule.end_date}
              // value={schedule.end_date}
              onChange={ed_date => {
                this.setState({ ed_date });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>

        {/* 여행 일정 추가 하는 부분 끝에 날짜 기록하면 좋을듯?? */}
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={2}
        >
          <TextField
          required
          id="outlined-required"
          
          name ='location'
          placeholder="location"
          value={schedule.location}
          onChange={(e)=>handlerSetProps_schedule(e.target.name, e.target.value)}
          style={{ width: '40%' }}
        />
        <TextField
          required
          id="outlined-required"
          
          name ='title'
          placeholder="title"
          value={schedule.title}
          onChange={(e)=>handlerSetProps_schedule(e.target.name, e.target.value)}
          style={{ width: '40%' }}
        />
        <TextField
          required
          id="outlined-required"
          
          name ='description'
          placeholder="description"
          value={schedule.description}
          onChange={(e)=>handlerSetProps_schedule(e.target.name, e.target.value)}
          style={{ width: '40%' }}
          multiline
          rows={4}
        />
          
        
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              style={{ width: '40%' }}
              label='content'
              name ='content'// 독스 보면서 이벤트 처리 obsrever
              value ={content.content}
              placeholder='input destination or places'
              onChange={(e)=>handlerSetProps_content(e.target.name, e.target.value)}
              
              />
            
            <IconButton onClick={()=>addContent()} sx={{ p: '10px' }} aria-label="search">
              <ControlPointIcon />
            </IconButton>
            <IconButton onClick={()=>deleteContent()} sx={{ p: '10px' }} aria-label="search">
              <DeleteForeverIcon />
            </IconButton>
            <IconButton onClick={()=>updateContent()} sx={{ p: '10px' }} aria-label="search">
              <SecurityUpdateGoodIcon />
            </IconButton>
          </Paper>

          {contents}

              <IconButton onClick={()=> addSchedule()}>
                <SaveOutlinedIcon/>
              </IconButton>

        </Stack>

      </div>
    );
  }
}

export default observer(ScheduleUpdateView);