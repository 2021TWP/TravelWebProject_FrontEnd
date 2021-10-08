import axios from 'axios';

class ScheduleApi{
  URL ='/api/schedule/';

  scheduleList(){
    return axios.get(this.URL)
                .then((response) => response.data);
  }
}