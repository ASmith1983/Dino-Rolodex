import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
      name: "Dino-name"
    }
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Helllo {this.state.name}</p>
          <button onClick={() => {


          }}>Change name</button>
        </header>
      </div>
    );

  }

}

export default App;
