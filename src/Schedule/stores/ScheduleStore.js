import {makeAutoObservable,runInAction} from "mobx";
import ScheduleApi from '../api/ScheduleApi'


class ScheduleStore{
  schedule ={};
  scheduleList = {};

  constructor() {
    makeAutoObservable(this,{},{autoBind:true})
  }

  setProps = (name, value) => {
    if (name === "keyword") {
      runInAction(()=>this.keyword = value);
    }
    else {
      runInAction(()=>this.schedule = {...this.schedule, [name]:value});
    }
  } 
  
  async selectSchedule(schedule){
    try{
      const result = await ScheduleApi.scheduleDetail(schedule.id);
      runInAction(()=>this.schedule=result);

    }catch(error){
      console.log(error);
    }
  }

  async selectAll(){
    try{
      const result = await ScheduleApi.scheduleList();
      runInAction(()=>this.scheduleList =result);
    }catch(error){
      console.log(error);
    }
  }
  async addSchedule(){
    try {
      await ScheduleApi.scheduleCreate(this.scheduleInfo);
      this.selectAll();
    }catch(error) {
      console.log(error)
    }
    this.init();
  }
  init(){
    this.schedule={};
  }
  async deleteBook() {
    try{
      await ScheduleApi.scheduleDelete(this.schedule.id);
      this.selectAll();
    }catch(error) {
      console.log(error)
    }
    this.init();
  }
  
  async updateBook() {
    try{
      await ScheduleApi.scheduleUpdate(this.schedule, this.schedule.id);
      this.selectAll();
    }catch(error) {
    console.log(error)
    }
    this.init();
  }
// location받는 부분
//comment update 부분
}

export default new ScheduleStore();