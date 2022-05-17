import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
        {/* <input className='search-box' type='search' placeholder='search dinos' onChange={onSearchChange}/> */}
        {/* {
          filteredDinos.map((dino) => {
            return (<div key={dino.id}>
                       <h1 >{dino.Name}-{dino.Description}</h1>
                   </div>)
          })
        } */} 
        <SearchBox 
          className= 'dino-search-box'
          onChangeHandler= {onSearchChange} 
          placeholder= 'search dinos'
        />
        <CardList dinos={ filteredDinos } />
      </div>
    );

  }

}

export default App;
