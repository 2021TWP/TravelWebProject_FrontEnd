// 내 정보 뿌리는 거

import React, { Component } from 'react';
import {observer} from 'mobx-react'
import MyPageBoardListView from '../Views/MyPageBoardListView';
import MyPageStore from '../Stores/MyPageStore';
import BoardStore from '../../Board/Stores/BoardStore';


class MyPageListContainer extends Component {
    

    render() {
        
        return(
         <div>
             아이디
             이름
             이메일 
         </div>
                            );
      

        
    }
}

export default observer(MyPageListContainer);


// class MyPageBoardContainer extends Component {
    
//     render() {
        
//         return (
//             <div>
            
//             </div>
//         );
//     }
// }

// export default observer(MyPageBoardContainer);