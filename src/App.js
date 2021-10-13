import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';


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
        </body>
        <footer></footer>
      </div>
    )
  }
}
export default App;