import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardInputContainer from './Board/Containers/BoardInputContainer';


class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <body>
          <RegisterContainer/>
          <br/>
          <br/>
          <br/>
          <br/>
          <LoginContainer/>
          <br/>
          <br/>
          <br/>
          <br/>
          <GroupContainer/>
          <br/>
          <br/>
          <br/>
          <br/>
          <BoardInputContainer />
        </body>
        <footer></footer>
      </div>
    )
  }
}
export default App;