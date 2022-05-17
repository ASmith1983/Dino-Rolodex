import { Component } from "react";
import './card-list.component.css'

class CardList extends Component{
    render(){
        console.log('render from cardlist');
        const { dinos } = this.props;
        return (
            <div className='card-list'>
                {dinos.map((dino) => (
                    <div className='card-container' key={dino.id}>
                        {/* <img src={`https://dinosaurpictures.org/${dino.Name}-pictures`} alt={`${dino.Name}`} /> */}
                        <h1>{dino.Name}</h1>
                        <h2>{dino.Description}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;
