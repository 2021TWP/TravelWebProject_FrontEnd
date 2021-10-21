import React, { Component } from 'react';
import BoardStore from '../Stores/BoardStore';

class BoardUpdateView extends Component {
  
  boardStore = BoardStore

  componentDidMount(){
    // console.log(this.props.match.params.id)
    // this.boardStore.selectBoard(this.props.match.params.id);
    this.boardStore.boardSetProps(this.props.match.params.id);
 console.log(this.boardStore.board.id)
}
  
  
  render() {
    const { board, boardSetProps , boardModify} = this.boardStore;
    // const {boardSetProps} = this.props
    return (
        <div>
            <select name="category_id" onChange={(e)=>boardSetProps(e.target.name, e.target.value)}>
                <option value="1">자유 게시판</option>
                <option value="2">여행 일지</option>
                <option value="3">번개 모임</option>
            </select>

            <input
                type="text" 
                name="title"
                value={board.title} 
                onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
                placeholder="제목"/><br/>

            <input
                type="text" 
                name="board_content"
                value={board.board_content} 
                onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
                placeholder="내용"/><br/>

            <input
                type="text" 
                name="imgUrl"
                value={board.imgUrl} 
                onChange={(e)=>boardSetProps(e.target.name, e.target.value)}
                placeholder="사진"/><br/>
            

            <button onClick={()=>boardModify()}>MODIFY</button>
        </div>
    );
}
}

export default BoardUpdateView;