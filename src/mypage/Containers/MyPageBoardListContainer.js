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
        const { boards, selectBoard, checked, selectAll } = this.boardStore;
        const {selectMypageAll} = this.mypageStore
        return(
        <MyPageBoardListView boards={boards}
                            selectBoard={selectBoard}
                            selectAll={selectAll}
                            selectMypageAll={selectMypageAll}/>
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