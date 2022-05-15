import { Component } from "react";

class CardList extends Component{
    render(){
        console.log('render from cardlist');
        const { dinos } = this.props;
        return <div>
            
                {dinos.map((dinos) => (
                  <h1 key={dinos.id}>{dinos.Name}</h1>
                ))}

               </div>
    }
}

export default CardList;
