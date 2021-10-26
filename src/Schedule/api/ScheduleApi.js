import axios from 'axios';

class ScheduleApi{
  URL ='/api/travel/';

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
    //josn api stream 변환하는거...
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

  contentDetail(id){
    
    return axios.get(this.URL+`content/detail/${id}/`)
                .then((response)=>response.data)
  }

  contentCreate(contentInfo){
    const content = {...contentInfo};
    return axios.post(this.URL+'content/create/',content)
                .then((response)=>response.data);
  }

  contentUpdate(contentInfo,id){
    const modInfo ={...contentInfo};
    return axios.put(this.URL+`content/update/${id}/`,modInfo);
  }

  contentDelete(id){
    return axios.delete(this.URL+`content/delete/${id}/`)
                .then((response)=>response.data);
  }

  contentList(s_id){
    // return axios.get(this.URL+`content/${s_id}`)
    return axios.get(this.URL+`content/${s_id}/`)
                .then((response) => response.data);
  }

  // getScheduleByGroup(g_id){
  //   return axios.get(this.URL+``)
  // }
  mypagePlan(g_id){
    return axios.get(this.URL + `group/${g_id}/schedule/`).then((response)=>response.data)
  }


  mypagePlanCreate(scheduleInfo,g_id){
    const schedule ={...scheduleInfo};
    return axios.post(this.URL + `group/${g_id}/schedule/create/`,schedule)
                  .then((response)=>response.data)
  }

  
  

}
export default new ScheduleApi();