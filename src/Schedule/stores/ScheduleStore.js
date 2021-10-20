import {makeAutoObservable,runInAction} from "mobx";
import ScheduleApi from '../api/ScheduleApi'


class ScheduleStore{
  
  schedule ={ id:"",
  title:"",
  description:"",
  start_date:"",
  end_date:""
            };
  scheduleList = [];
  content = {id:"", schedule_id:"",content:""};
  contentList=[];
  // schedule_info ={
  //   id:"",
  //             title:"",
  //             description:"",
  //             start_date:"",
  //             end_date:""
  // }
  

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
  
  async selectSchedule(id){
    try{
      // console.log(id);
      const result = await ScheduleApi.scheduleDetail(id);
      // console.log(result);
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
      const data = await ScheduleApi.scheduleCreate(this.schedule);
      if('id' in data){
        console.log(data);
        console.log("success");
        runInAction(()=>this.schedule = data);
      }
      else{
        console.log("failed");
      }
      this.selectAll();
    }catch(error) {
      console.log(error)
    }
    // this.init();
  }
  init(){
    this.schedule={};
  }
  async deleteSchedule() {
    try{
      await ScheduleApi.scheduleDelete(this.schedule.id);
      this.selectAll();
    }catch(error) {
      console.log(error)
    }
    this.init();
  }
  
  async updateSchedule() {
    try{
      await ScheduleApi.scheduleUpdate(this.schedule, this.schedule.id);
      this.selectAll();
    }catch(error) {
    console.log(error)
    }
    this.init();
  }



handlerSetProps_schedule(name, value){
  // console.log(name, value);
  this.schedule = {...this.schedule, [name]:value}
  // console.log(value) //기존 properties에 name:value만 수정
} 

handlerSetProps_content(name, value){
  console.log(name,value);
  this.content = {...this.content, [name]:value};
  console.log(this.content.content); //기존 properties에 name:value만 수정
}

async selectAll_content(){
  try{
    const result = await ScheduleApi.contentList();
    runInAction(()=>this.contentList =result);
    console.log(result);
    console.log(this.contentList);
  }catch(error){
    console.log(error);
  }
}
async addContent(){
  try {
    console.log(this.content);
    await ScheduleApi.contentCreate(this.content);
    // console.log(this.content.content)
    this.selectAll_content();
    console.log("add test", this.content.content);
  }catch(error) {
    console.log(error)
  }
  this.init_content();
}

init_content(){
  this.content ={value:""};
}
async deleteContent() {
  try{
    await ScheduleApi.contentDelete(this.content.id);
    this.selectAll_content();
  }catch(error) {
    console.log(error)
  }
  this.init_content();
}

async updateContent() {
  try{
    await ScheduleApi.contentUpdate(this.content, this.content.id);
    this.selectAll_content();
  }catch(error) {
  console.log(error)
  }
  this.init_content();
}
async selectContent(id){
  try{
    const result = await ScheduleApi.contentDetail(id);
    runInAction(()=>this.content=result);

  }catch(error){
    console.log(error);
  }
}
// location받는 부분

}

export default new ScheduleStore();