import React, { Component } from 'react';
import {observer} from 'mobx-react'

import {TextField} from '@material-ui/core'
import MyPageStore from '../Stores/MyPageStore';


class MyPageBoardListView extends Component {
    

    componentDidMount() {
        this.props.selectMypageAll();
    }

    render() {
        const { boards, selectBoard, checked , selectAll , selectMypageAll} = this.props;
      const boardList = boards.map(board => { 
            return (
                < TextField key={board.id} board={board} checked={checked} checked_id={checked.id} selectBoard={()=>selectBoard(board.id)} />
            )

            
        });        
        
        return (
            <div>
              {boardList}
            </div> 
        )

        
    }
}

export default MyPageBoardListView;


// class MyPageBoardContainer extends Component {
    
//     render() {
        
//         return (
//             <div>
            
//             </div>
//         );
//     }
// }

// export default observer(MyPageBoardContainer);