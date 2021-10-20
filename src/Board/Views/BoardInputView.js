import React, { Component } from 'react';

class BoardInputView extends Component {
    render() {

        const {board, boardAdd, boardChange, boardModify, init} = this.props;
        return (
            <div>
                <select name="category_id" onChange={(e)=>boardChange(e.target.name, e.target.value)}>
                    <option value="1">자유 게시판</option>
                    <option value="2">여행 일지</option>
                    <option value="3">번개 모임</option>
                </select>

                <input
                    type="text" 
                    name="title"
                    value={board.title} 
                    onChange={(e)=>boardChange(e.target.name, e.target.value)}
                    placeholder="제목"/><br/>

                <input
                    type="text" 
                    name="board_content"
                    value={board.board_content} 
                    onChange={(e)=>boardChange(e.target.name, e.target.value)}
                    placeholder="내용"/><br/>

                <input
                    type="text" 
                    name="imgUrl"
                    value={board.imgUrl} 
                    onChange={(e)=>boardChange(e.target.name, e.target.value)}
                    placeholder="사진"/><br/>
                

                <button onClick={()=>boardAdd()}>ADD</button>
            </div>
        );
    }
}

export default BoardInputView;