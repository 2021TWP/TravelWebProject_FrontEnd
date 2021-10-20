import {makeAutoObservable, runInAction} from 'mobx'
import boardApi from '../Api/BoardApi'

class BoardStore {
    board = {};
    boards = [];


    comment = {id: "",
               board_id : "",
               user_id : "",
               comment_content : "",
               comment_date : ""};

    comments = []

    checked = {id : "" , checked :  "false"}

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }

    init = () => {
        this.board = {id:"", user_id:"", schedule_id:"", category_id:"1", 
            title:"", imgUrl:"", date:"",board_content:"", hit:"", like:""}
    }

    boardSetProps = (name, value) => {
        this.board = {...this.board, [name]:value}
    }

    //action
    async selectBoard(id){
        try{
            const result = await boardApi.boardDetail(id);
            runInAction(()=>this.board = result);

            
            this.boardHit();
            this.selectBoardComment(id)
        }catch(error){
            console.log(error);
        }

    }

    async selectAll(){
        try{
            const results = await boardApi.boardList();
            runInAction(()=>this.boards = results);
        }catch(error){
            console.log(error);
        }
    }

    async boardHit(){
        try{
            runInAction(()=>this.board.hit += 1)
            const result = await boardApi.boardHit(this.board);
            runInAction(()=>this.board = result);
            console.log(this.board.id)
            this.selectAll();
        }catch(error){
            console.log(error);
        }
    }

    // async boardLike(){
    //     try{
    //         // runInAction(()=>this.board.like += 1)
    //         const result = await boardApi.boardLike(this.board);
    //         runInAction(()=>this.board = result);
    //         // this.selectAll();
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    async boardAdd() {
        try{
            this.board.date = new Date()
            await boardApi.boardCreate(this.board);
            this.selectAll();
            console.log(this.board);
        }catch(error){
            console.log(error);
            this.message = error.message;
        }

        this.init();
    }

    async boardRemove() {
        try{
            await boardApi.boardDelete(this.board.id);
            this.selectAll();
        }catch(error){
            this.message = error.message;
        }
  
          this.init();
      }
  
    async boardModify() {
        try{
            console.log(this.board.id)
            this.board.date = new Date()
            await boardApi.boardUpdate(this.board.id, this.board);
            this.selectAll();
        }catch(error){
            this.message = error.message;
        }

        this.init();
    }

}

export default new BoardStore();