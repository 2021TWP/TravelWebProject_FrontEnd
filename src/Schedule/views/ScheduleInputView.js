import React, { useEffect, Component } from 'react';
import MapContainer from '../../Map/MapContainer';
import { Paper, Box, InputBase, Grid, Input, TextField, Stack, InputAdornment, IconButton } from '@material-ui/core'
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
import {observer} from 'mobx-react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// scheduleStore = ScheduleStore;

// function nextSchedule(e) {
//   constscheduleStore = ScheduleStore;
//   this.scheduleStore.addSchedule();
//   window.location.href =`/schedules/update/${this.schduleStore.schedule.id}`
// }

class ScheduleInputView extends Component {

  scheduleStore = ScheduleStore;
  nextSchedule(e) {
    this.scheduleStore.addSchedule();
    window.location.href =`/schedules/update/${this.schduleStore.schedule.id}`
  }
//생성자 오버라이딩 해서 state this.state = 
constructor(){
  super();
  this.state ={
    st_date : new Date(),
    ed_date : new Date()
  };
}

  render() {
    const {st_date,ed_date} = this.state;
    const {schedule,contentList, content,handlerSetProps_schedule,handlerSetProps_content,
      selectAll_content, addContent,deleteContent,updateContent,
      selectContent,addSchedule } = this.scheduleStore;
    schedule.start_date = st_date;
    schedule.end_date = ed_date;
    const contents = contentList.map(content =>{
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
{/* 여긴 지도 부르는 부분 */}
        <MapContainer />

        {/* 이부분은 나중에  api 연동이 필요할거임 지도 위치 검색하는거 때문에 -> 유튜브 보고 참고해야지 */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="baseline"
          spacing={2}
        >

          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              style={{ width: '40%' }}
              placeholder="Search..." />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Stack>

{/* 여긴 날짜 갖고 오는 부분 */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="start_date"
              value ={st_date}
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
              
              value ={ed_date}
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
          
        
          {/* <Paper
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
          </Paper> */}

          

              <IconButton onClick={()=> this.nextSchedule()}>
                <NavigateNextIcon/>
              </IconButton>

        </Stack>

      </div>
    );
  }
}

export default observer(ScheduleInputView);