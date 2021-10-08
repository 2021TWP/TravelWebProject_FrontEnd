import {makeAutoObservable,runInAction} from "mobx";
import schedule from '../api/ScheduleApi'


class ScheduleStore{
  schedule ={};
  scheduleList = {};

  constructor() {
    makeAutoObservable(this,{},{autoBind:true})
  }
  
  async selectSchedule(schedule){
    try{

    }catch(error){
      console.log(error);
    }
  }

}

export default new ScheduleStore();