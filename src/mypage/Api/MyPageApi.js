import axios from "axios";

class MyPageApi{

  URL = 'api/mypage/'

  mypageList(id){ // user id 물어보기 
    return axios.get(this.URL).then((response)=>response.data)
  }

  mypageBoard(){ // user id 물어보기 
    return axios.get(this.URL + `myboard/`).then((response)=>response.data)
  }

  mypageChangeInfo(id){ 
    return axios.put(this.URL + `changneinfo/`).then((response)=>response.data)
  }
  
  // mypageChangeInfoUpdate(id, pk){ 
  //   return axios.put(this.URL + `${id}/changneinfo/update/${pk}/`).then((response)=>response.data) // 어떤 데이터를 수정할 것인지 적기 !!!!
  // }

  mypageGroup(id){
    return axios.get(this.URL + `${id}/group/`).then((response)=>response.data)
  }

  mypageGroupCreate(id){
    return axios.post(this.URL + `${id}/group/create/`).then((response)=>response.data)
  }


  mypageGroupUpdate(id,pk){
    return axios.put(this.URL + `${id}/group/update/${pk}/`).then((response)=>response.data)
  }

  mypageGroupDelete(id,pk){
    return axios.delete(this.URL + `${id}/group/delete/${pk}/`).then((response)=>response.data)
  }


  // mypagePlan(id){
  //   return axios.get(this.URL + `${id}/plan/`).then((response)=>response.data)
  // }


  // mypagePlanCreate(id){
  //   return axios.post(this.URL + `${id}/plan/create/`).then((response)=>response.data)
  // }

  
  // mypagePlanUpdate(id,pk){
  //   return axios.put(this.URL + `${id}/plan/update/${pk}/`).then((response)=>response.data)
  // }


  // mypagePlanDelete(id,pk){
  //   return axios.put(this.URL + `${id}/plan/delete/${pk}/`).then((response)=>response.data)
  // }

}

export default new MyPageApi();