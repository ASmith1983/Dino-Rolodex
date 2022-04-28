import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
     dinos: [], 
     searchField: ''    
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

 onSearchChange = (event) => {
  console.log(event.target.value);
  const searchField = event.target.value.toLowerCase();
  this.setState(() => {
    return { searchField };
  });
}

  render() {
    console.log('render');

    const { dinos, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredDinos = dinos.filter((dino) => {
      return dino.Name.toLowerCase().includes(searchField);
    });



    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search dinos' onChange={onSearchChange}/>

        {
          filteredDinos.map((dino) => {
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
