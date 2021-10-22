import { makeAutoObservable, runInAction } from "mobx";
import ScheduleApi from '../api/ScheduleApi'


class ScheduleStore {

  schedule = {
    id: "",
    title: "",
    description: "",
    start_date: "",
    end_date: ""
  };
  scheduleList = [];
  content = { id: "", schedule_id: "", content: "" };
  contentList = [];


  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setProps = (name, value) => {
    if (name === "keyword") {
      runInAction(() => this.keyword = value);
    }
    else {
      runInAction(() => this.schedule = { ...this.schedule, [name]: value });
    }
  }

  async selectSchedule(id) {
    try {
      const result = await ScheduleApi.scheduleDetail(id);
      runInAction(() => this.schedule = result);


    } catch (error) {
      console.log(error);
    }
  }

  async selectAll() {
    try {
      const result = await ScheduleApi.scheduleList();
      runInAction(() => this.scheduleList = result);
    } catch (error) {
      console.log(error);
    }
  }
  async addSchedule() {
    try {
      const data = await ScheduleApi.scheduleCreate(this.schedule);
      if ('id' in data) {
        runInAction(() => this.schedule = data);
      }
      else {
        console.log("failed");
      }
      this.selectAll();
    } catch (error) {
      console.log(error)
    }
    // this.init();
  }
  init() {
    this.schedule = {};
  }
  async deleteSchedule() {
    try {
      await ScheduleApi.scheduleDelete(this.schedule.id);
      this.selectAll();
    } catch (error) {
      console.log(error)
    }
    this.init();
  }

  async updateSchedule() {
    try {
      await ScheduleApi.scheduleUpdate(this.schedule, this.schedule.id);
      this.selectAll();
    } catch (error) {
      console.log(error)
    }
    this.init();
  }



  handlerSetProps_schedule(name, value) {
    this.schedule = { ...this.schedule, [name]: value }
  }

  handlerSetProps_content(name, value) {
    this.content = { ...this.content, [name]: value };
  }

  async selectAll_content(s_id) {
    try {
      const result = await ScheduleApi.contentList(s_id);
      runInAction(() => this.contentList = result);
      
    } catch (error) {
      console.log(error);
    }
  }
  async addContent(s_id) {
    try {
      this.content.schedule_id = s_id;
      
      await ScheduleApi.contentCreate(this.content);
      console.log("add test", this.content.content);
    } catch (error) {
      console.log(error)
    }
    this.selectAll_content(s_id)
    this.init_content();
  }

  init_content() {
    this.content = { id: "", schedule_id: "", content: "" };
  }
  async deleteContent() {
    try {
      await ScheduleApi.contentDelete(this.content.id);
      this.selectAll_content(this.content.schedule_id);
    } catch (error) {
      console.log(error)
    }
    this.selectAll_content(this.content.schedule_id);
    this.init_content();
  }

  async updateContent() {
    try {
      await ScheduleApi.contentUpdate(this.content, this.content.id);
      this.selectAll_content(this.content.schedule_id);
    } catch (error) {
      console.log(error)
    }
    this.init_content();
  }
  async selectContent(id) {
    try {
      console.log(id);
      const result = await ScheduleApi.contentDetail(id);
      runInAction(() => this.content = result);

    } catch (error) {
      console.log(error);
    }
  }
  // location받는 부분

}

export default new ScheduleStore();