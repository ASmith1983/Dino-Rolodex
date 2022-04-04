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

          <p>Hello {this.state.name}</p>

          <button onClick={() => {
              // this.setState({ name: 'Trex'})
              // this.state.name = 'Trex'....or
              this.setState(() => {
                return {
                  name: 'Stegosaurus'
                }
              }, () => {
                console.log(this.state)
              });    
              console.log(this.state);
          }}>Change name</button>
        </header>
      </div>
    );

  }

}

export default App;
