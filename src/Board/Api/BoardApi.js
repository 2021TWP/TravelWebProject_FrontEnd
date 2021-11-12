import axios from 'axios'

class BoardApi{
    URL = '/api/board/'

    boardList(){
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    boardFree(){
        return axios.get(this.URL +'free/')
                .then((response)=>response.data);
    }

    boardReview(){
        return axios.get(this.URL +'review/')
                .then((response)=>response.data);
    }

    boardImpromptu(){
        return axios.get(this.URL +'impromptu/')
                .then((response)=>response.data);
    }


    boardDetail(id){
        return axios.get(this.URL+`${id}/`)
                .then((response)=>response.data);
    }

    boardCreate(board){
        return axios.post(this.URL+'create/', board)
      .then((response)=>response.data);
    }

    boardUpdate(id, board){
        return axios.put(this.URL+`update/${id}/`, board)
                .then((response)=>response.data);
    }

    boardDelete(id){
        return axios.delete(this.URL+`delete/${id}/`)
                .then((response)=>response.data)
    }

    boardHit(board){
        return axios.put(this.URL+`update/hit/${board.id}/`, board)
                .then((response)=>response.data)
    }

    // board id에 해당하는 comment목록 호출 
    commentList(bid){
        return axios.get(this.URL+`comment/list/${bid}/`)
                .then((response)=>response.data);
    }
    
    // comment id에 해당하는 comment 상세보기 
    commentDetail(id){
        return axios.get(this.URL+`comment/${id}/`)
                .then((response)=>response.data);
    }

    commentCreate(comment){
        return axios.post(this.URL+'comment/create/', comment)
                .then((response)=>response.data);
    }

    commentUpdate(id, comment){
        console.log(comment.board_id, comment.comment_content)
        return axios.put(this.URL+`comment/update/${id}/`,
        {
            board_id: `${comment.board_id}`,
            id : `${comment.id}`,
            user_id: `${comment.user_id}`,
            comment_content: `${comment.comment_content}`,
            comment_date: new Date(),
        }
        )
                .then((response)=>response.data);
    }

    commentDelete(id){
        return axios.delete(this.URL+`comment/delete/${id}/`)
                .then((response)=>response.data)
    }
}

export default new BoardApi();