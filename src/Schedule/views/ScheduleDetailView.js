import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MapView from '../../Map/MapView';
import { Button, Paper, Box, Stack } from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import ScheduleStore from '../stores/ScheduleStore';


class ScheduleDetailView extends Component {
  scheduleStore = ScheduleStore;


  createSchedule(e) {
    window.location.href = "/schedules/create/"
  }
  updateSchedule(id) {
    window.location.href = `/schedules/update/${id}`;
  }
  scheduleList() {
    window.location.href = '/schedules/'
  }



  componentDidMount() {
    console.log(this.props.match.params.id);
    this.scheduleStore.selectSchedule(this.props.match.params.id);//라우터에서 포함을 하고 있기 때문에(상위 컴포넌트가 router이기 떄문에.)
    this.scheduleStore.selectAll_content(this.props.match.params.id);
  }

  render() {
    const { schedule, contentList, 
      selectContent } = this.scheduleStore;
    console.log("s_lat", schedule.lat);
    console.log(schedule.lng);
    const contents = contentList.map(content => {

      return (
        <TextField key={content.id} value={content.content} style={{ width: '40%' }}
          InputProps={{
            readOnly: true,
          }}
          onClick={() => selectContent()} />
      )
    });

    return (
      <div>
        <Button onClick={() => this.createSchedule()}>create</Button>
        <Button onClick={() => this.updateSchedule(schedule.id)}>modify</Button>
        <Button onClick={() => this.scheduleList()}>List</Button>

        <MapView schedule={schedule} />


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
            InputProps={{
              readOnly: true,
            }} style={{ width: '40%' }}
          />
          <TextField
            required
            id="outlined-required"

            name='title'
            placeholder="title"
            value={schedule.title}
            InputProps={{
              readOnly: true,
            }} style={{ width: '40%' }}
          />
          <TextField
            required
            id="outlined-required"
            name='description'
            placeholder="description"
            value={schedule.description}
            InputProps={{
              readOnly: true,
            }} style={{ width: '40%' }}
            multiline
            rows={4}
          />

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

export default observer(ScheduleDetailView);