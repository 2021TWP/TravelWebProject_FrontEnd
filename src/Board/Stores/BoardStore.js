import {makeAutoObservable, runInAction} from 'mobx'
import boardApi from '../Api/BoardApi'

class BoardStore {
    board = {id:"",
            user_id:"", 
            schedule_id:"", 
            category_id:"1", 
            title:"", 
            imgUrl:"", 
            date:"",
            board_content:"", 
            hit:"", 
            like:""};

    boards = [];

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
    async selectBoard(board){
        try{
            const result = await boardApi.boardDetail(board.id);
            runInAction(()=>this.board = result);
        }catch(error){
            console.log(error);
        }

        // this.boardHit();
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
            const result = await boardApi.boardHit(this.board.id);
            runInAction(()=>this.board = result);
        }catch(error){
            console.log(error);
        }
    }

    async boardLike(){
        try{
            const result = await boardApi.boardLike(this.board.id);
            runInAction(()=>this.board = result);
        }catch(error){
            console.log(error);
        }
    }

    async boardAdd() {
        try{
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
            await boardApi.boardUpdate(this.board.id, this.board);
            this.selectAll();
        }catch(error){
            this.message = error.message;
        }

        this.init();
    }

}

export default new BoardStore();