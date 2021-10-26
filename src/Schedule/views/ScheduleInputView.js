import React, { useEffect, Component } from 'react';

import MapView from '../../Map/MapView';
import { Button, Paper, Box, InputBase, Grid, Input, TextField, Stack, InputAdornment, IconButton } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import { getPlaceData } from '../api/getApi'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import ScheduleStore from '../stores/ScheduleStore';
import { observer } from 'mobx-react';


class ScheduleInputView extends Component {
  scheduleStore = ScheduleStore;
  constructor() {
    super();
    this.state = {
      st_date: new Date(),
      ed_date: new Date()
    };
  }

  nextSchedule(e) {
    this.scheduleStore.addSchedule();
    this.props.checkHandler();
  }
  //생성자 오버라이딩 해서 state this.state = 


  render() {
    const { st_date, ed_date } = this.state;
    const { schedule, handlerSetProps_schedule } = this.scheduleStore;

    schedule.start_date = st_date;
    schedule.end_date = ed_date;



    return (
      <div>

        {/* 여긴 지도 부르는 부분 */}
        <MapView schedule={schedule} />

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="start_date"
              value={st_date}
              onChange={st_date => {
                this.setState({ st_date });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="end_date"

              value={ed_date}
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

          <Button onClick={() => this.nextSchedule()}>Next</Button>


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

export default observer(ScheduleInputView);