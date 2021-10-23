import { makeAutoObservable , runInAction} from "mobx"

import mypageApi from "../Api/MyPageApi";

class MyPageStore{


  user = {id: "", username:"", name:"" , email:"", g_id:[]}

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
      console.log(results)
  }catch(error){
      console.log(error);
  }
}


async selectMyInfoAll(){
  try{
      // this.user.username = sessionStorage.getItem('username')
      this.user.id = sessionStorage.getItem('id')
      const results = await mypageApi.mypageList(this.user.id);
      runInAction(()=>this.users = results);
      console.log(results)
  }catch(error){
      console.log(error);
  }
}

async getAuthor(user_id) {
  try{
    const results = await mypageApi.getAuthor(user_id);
    return results.username
    // console.log(results)
}catch(error){
    console.log(error);
}

}

}

export default new MyPageStore();
