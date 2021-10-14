import axios from 'axios';

class ScheduleApi{
  URL ='/api/schedule/';

  scheduleList(){
    return axios.get(this.URL)
                .then((response) => response.data);
  }

  scheduleDetail(id){
    return axios.get(this.URL + `${id}/`)
                .then((response)=>response.data);
  }

  scheduleCreate(scheduleInfo){
    const schedule ={...scheduleInfo};
    return axios.post(this.URL + 'create/',schedule)
                .then((response)=>response.data);
  }
  scheduleDelete(id){
    return axios.delete(this.URL + `delete/${id}/`)
                .then((response)=>response.data);
  }

  scheduleUpdate(scheduleInfo, id){
    const modInfo={...scheduleInfo};
    return axios.put(this.URL + `update/${id}/`,modInfo);
  }

  contentCreate(contentInfo){
    const content = {...contentInfo};
    return axios.post(this.URL+'create/',content)
                .then((response)=>response.data);
  }

  contentUpdate(contentInfo,id){
    const modInfo ={...contentInfo};
    return axios.put(this.URL+`update/${id}/`,modInfo);
  }

  contentDelete(id){
    return axios.delete(this.URL+`delete/${id}/`)
                .then((response)=>response.data);
  }


}
export default new ScheduleApi();