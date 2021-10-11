import React, { Component } from 'react'
import LoginContainer from './Containers/AccountsContainers/LoginContainer';
import RegisterContainer from './Containers/AccountsContainers/RegisterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <body>
          <RegisterContainer/>
          <br/>
          <br/>
          <br/>
          <br/>
          <LoginContainer/>
        </body>
        <footer></footer>
      </div>
    )
  }
}
export default App;