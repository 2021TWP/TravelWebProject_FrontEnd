import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MapView from '../../Map/MapView';
import { Button, Paper, Box, InputBase, Grid, Input, Stack, InputAdornment, IconButton } from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ScheduleStore from '../stores/ScheduleStore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';

function createSchedule(e) {
  window.location.href = "/schedules/create/"
}
class ScheduleUpdateView extends Component {
  scheduleStore = ScheduleStore;

  componentDidMount() {
    this.scheduleStore.selectSchedule(this.props.match.params.id);//라우터에서 포함을 하고 있기 때문에(상위 컴포넌트가 router이기 떄문에.)
    this.scheduleStore.selectAll_content(this.props.match.params.id);
  }

  scheduleList() {
    window.location.href = '/schedules/';
  }
  deleteAndReturn(){
    this.scheduleStore.deleteSchedule(this.props.match.params.id);
    this.scheduleList();
  }
  updateAndReturn(){
    this.scheduleStore.updateSchedule();
    this.scheduleList();
  }

  render() {
    const { schedule, contentList, content, handlerSetProps_schedule, handlerSetProps_content,
      selectAll_content, addContent, deleteContent, updateContent,
      selectContent, addSchedule, updateSchedule, deleteSchedule } = this.scheduleStore;

    const contents = contentList.map(content => {
      
      return (
        <TextField key={content.id} value={content.content} style={{ width: '40%' }}
          InputProps={{
            readOnly: true,
          }}
          onClick={() => selectContent(content.id)} />
      )
    });

    return (
      <div>
        <Button onClick={() => this.scheduleList()}>List</Button>
        <MapView schedule={schedule}/>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
        <Button onClick={() => this.updateAndReturn()}>수정하기</Button>
      
        <Button onClick={() => this.deleteAndReturn(schedule.id)}>삭제하기</Button>
        
          
        </Stack>
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
              value={schedule.start_date}
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
              value={schedule.end_date}
              // value={schedule.end_date}
              onChange={ed_date => {
                this.setState({ ed_date });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={2}
        >
          <TextField
            required
            id="outlined-required"

            name='location'
            placeholder="location"
            value={schedule.location}
            onChange={(e) => handlerSetProps_schedule(e.target.name, e.target.value)}
            style={{ width: '40%' }}
          />
          <TextField
            required
            id="outlined-required"

            name='title'
            placeholder="title"
            value={schedule.title}
            onChange={(e) => handlerSetProps_schedule(e.target.name, e.target.value)}
            style={{ width: '40%' }}
          />
          <TextField
            required
            id="outlined-required"

            name='description'
            placeholder="description"
            value={schedule.description}
            onChange={(e) => handlerSetProps_schedule(e.target.name, e.target.value)}
            style={{ width: '40%' }}
            multiline
            rows={4}
          />


          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%' }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              
              label='content'
              name='content'// 독스 보면서 이벤트 처리 obsrever
              value={content.content}
              placeholder='input destination or places'
              onChange={(e) => handlerSetProps_content(e.target.name, e.target.value)}

            />

            <IconButton onClick={() => addContent(schedule.id)} sx={{ p: '10px' }} aria-label="search">
              <ControlPointIcon />
            </IconButton>
            <IconButton onClick={() => deleteContent()} sx={{ p: '10px' }} aria-label="search">
              <DeleteForeverIcon />
            </IconButton>
            <IconButton onClick={() => updateContent()} sx={{ p: '10px' }} aria-label="search">
              <SecurityUpdateGoodIcon />
            </IconButton>
          </Paper>

          {contents}


        </Stack>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        ></Box>
      </div>
    );
  }
}

export default observer(ScheduleUpdateView);