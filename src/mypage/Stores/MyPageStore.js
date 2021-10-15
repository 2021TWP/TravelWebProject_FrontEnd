import { makeAutoObservable , runInAction} from "mobx"

import MyPageApi from "../Api/MyPageApi";

class MyPageStore{

  group = {name: "" , number : ""}
  groups = []

constructor(){
  makeAutoObservable(this,{},{autoBind:true})
}







}

export default new MyPageStore();
