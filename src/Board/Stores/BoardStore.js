import {makeAutoObservable, runInAction} from 'mobx'
import boardApi from '../Api/BoardApi'

class BoardStore {
    board = {};
    boards = [];

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }

    init = () => {
        this.board = {id:"", user_id:"", schedule_id:"", category_id:"", 
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
    }

    async selectAll(){
        try{
            const results = await boardApi.boardList();
            runInAction(()=>this.boards = results);
        }catch(error){
            console.log(error);
        }
    }

    async boardAdd() {
        try{
            await boardApi.bookCreate(this.board);
            this.selectAll();
        }catch(error){
            console.log(error);
            runInAction(this.message = error.message);
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

export default BoardStore;