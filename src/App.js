import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
     dinos: [],     
    };
 }

 componentDidMount() {
  fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
    .then(response => response.json())
    .then((dinoData) => this.setState(
      () => {
      return {dinos: dinoData}
      },
      () => {
        console.log(this.state);
      }
    ));
 }


  render() {
    return (
      <div className="App">
        
        {
          this.state.dinos.map((dino) => {
            return (<div key={dino.id}>
                       <h1 >{dino.Name}</h1>
                   </div>)
          })
        }

      </div>
    );

  }

}

export default App;
