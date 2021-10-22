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
            hit:0, 
            like:0};

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

    // onCheckToggle = (id) => {this.boards.map(board =>(board.id === id) ? {...board, checked : !this.checked } : board ) }
     onCheckToggle = (id) => {this.checked = "false" ? !this.checked : this.checked}

    init = () => {
        this.board = {id:"", user_id:"", schedule_id:"", category_id:"1", 
            title:"", imgUrl:"", date:"",board_content:"", hit:"", like:""}
    }

    boardSetProps = (name, value) => {
        this.board = {...this.board, [name]:value}
    }

    goList = (e) => {
        window.location.href = '/board/list/';
    }

    //action
    async selectBoard(id){
        try{
            const result = await boardApi.boardDetail(id);
            console.log(id);
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
            this.board.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().replace('T', ' ').substring(0, 19)
            this.board.user_id = sessionStorage.getItem("id")
            await boardApi.boardCreate(this.board);
            this.selectAll();
            // this.goList();
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
            this.goList();
        }catch(error){
            this.message = error.message;
        }
  
          this.init();
      }
  
    async boardModify() {
        try{
            console.log(this.board.id)
            this.board.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().replace('T', ' ').substring(0, 19)
            await boardApi.boardUpdate(this.board.id, this.board);
            this.selectAll();
            // this.goList();
        }catch(error){
            this.message = error.message;
        }

        this.init();
    }

 //comment

 commentSetProps = (name, value) => {
    this.comment = {...this.comment, [name]:value}
}


// async selectComment(comment){
//     try{
//         const result = await boardApi.boardDetail(comment.id);   // boardDetail 맞는지 확인 
//         runInAction(()=>this.comment = result);
//     }catch(error){
//         console.log(error);
//     }
// }


async selectComment(comment){
    try{
        const result = await boardApi.commentDetail(comment.id);   //
        runInAction(()=>this.comment = result);
    }catch(error){
        console.log(error);
    }
}


async commentAdd() {
    try{
        this.comment.comment_date = new Date();
        this.comment.board_id = this.board.id;
        await boardApi.commentCreate({...this.comment},this.comment.board_id, this.comment.comment_date );
        // this.selectBoardComment();
    }catch(error){
        console.log(error);
        runInAction(this.message = error.message);
    }

    this.comment_init();
}

async commentRemove() {
    try{
        await boardApi.commentDelete(this.comment.id);
        this.selectBoardComment(this.board.id);
   
    }catch(error){
        this.message = error.message;
    }

      this.comment_init();
  }

async commentModify() {
    try{
        await boardApi.commentUpdate(this.comment.id, this.comment);
        this.selectBoardComment(this.board.id);
    }catch(error){
        this.message = error.message;
    }

    this.comment_init();
}

comment_init = () => {
    this.comment = {id : "",
                    board_id : "",
                    user_id : "",
                    comment_content : "",
                    comment_date : ""} 
}

async selectCommentAll(){
    try{
        const results = await boardApi.commentList();
        runInAction(()=>this.comments = results);
    }catch(error){
        console.log(error);
    }
}

async selectBoardComment(id){
    //일단 아이디를 인자로 주었기 떄문에 호출 되는 다른 부분들에선 this.board.id로 호출하게 함 문제생김 여기서 해결해야함.
    try{
        // console.log(this.board.id);
        const results = await boardApi.commentList(id);
        // console.log(results);
        runInAction(()=>this.comments = results);
    }catch(error){
        console.log(error);
    }
}

}

export default new BoardStore();