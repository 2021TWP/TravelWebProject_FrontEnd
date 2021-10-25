import React, { Component } from 'react';
import {observer} from 'mobx-react'
import MyPageBoardListView from '../Views/MyPageBoardListView';
import MyPageStore from '../Stores/MyPageStore';
import BoardStore from '../../Board/Stores/BoardStore';


class MyPageBoardListContainer extends Component {
    
    mypageStore = MyPageStore
    boardStore = BoardStore;
    
    constructor(){super()}


    // componentDidMount() {
    //     this.mypageStore.selectAll();
    // }

    render() {
        const {selectBoard, checked, selectAll } = this.boardStore;
        const {user, boards,selectMypageAll, getAuthor , handlerFilterTextChange , filterText} = this.mypageStore
        return(
        <MyPageBoardListView boards={boards}
                            selectBoard={selectBoard}
                            selectAll={selectAll}
                            selectMypageAll={selectMypageAll}
                            boardStore = {this.boardStore}
                            user = {user}
                            getAuthor = {getAuthor}
                            filterText={filterText}
                            handlerFilterTextChange={handlerFilterTextChange}/>
                            );
      

        
    }
}

export default observer(MyPageBoardListContainer);


// class MyPageBoardContainer extends Component {
    
//     render() {
        
//         return (
//             <div>
            
//             </div>
//         );
//     }
// }

// export default observer(MyPageBoardContainer);