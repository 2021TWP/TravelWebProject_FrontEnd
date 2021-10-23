import { makeAutoObservable , runInAction} from "mobx"

import mypageApi from "../Api/MyPageApi";

class MyPageStore{


  user = {id:"" , name:"" , email:""}

  users = []

  board = {id:"",
  user_id:"", 
  schedule_id:"", 
  category_id:"1", 
  title:"", 
  imgUrl:"", 
  date:"",
  board_content:"", 
  hit:0, 
  like:0};

  boards = [];

constructor(){
  makeAutoObservable(this,{},{autoBind:true})
}


async selectMypageAll(){
  try{
      const results = await mypageApi.mypageBoard();
      runInAction(()=>this.boards = results);
  }catch(error){
      console.log(error);
  }
}




}

export default new MyPageStore();
