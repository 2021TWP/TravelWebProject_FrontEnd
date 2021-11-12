// 내 정보 뿌리는 거

import React, { Component } from 'react';
import {observer} from 'mobx-react'
import MyPageBoardListView from '../Views/MyPageBoardListView';
import MyPageStore from '../Stores/MyPageStore';
import BoardStore from '../../Board/Stores/BoardStore';
import MyPageListView from '../Views/MyPageListView';
import AccountStore from '../../Authentication/Stores/AccountStore';


class MyPageListContainer extends Component {
    
    mypageStore = MyPageStore
    accountStore = AccountStore

    render() {
        const {user} = this.accountStore

        return(
         <div>
             <MyPageListView user={user}/>

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