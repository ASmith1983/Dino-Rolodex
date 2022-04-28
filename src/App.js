import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
     dinos: [],     
    };
    console.log('constructor');
 }

 componentDidMount() {
   console.log('componentDidMount');
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
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search dinos' onChange={(event) => {
          console.log(event.target.value);

          const searchString = event.target.value.toLowerCase();
          const filteredDinos = this.state.dinos.filter((dino) => {
            return dino.Name.toLowerCase().includes(searchString);
          });
          
          this.setState(() => {
            return { dinos: filteredDinos };
          });

        }}/>

        {
          this.state.dinos.map((dino) => {
            return (<div key={dino.id}>
                       <h1 >{dino.Name}-{dino.Description}</h1>
                   </div>)
          })
        }

      </div>
    );

  }

}

export default App;
