import React,{Component} from 'react';
import './pokemon.css';

class Pokemon extends Component {
    render () {
        const {catchPokemon} = this.props
        return (
            <div className='flex-container'>
                <div>
                    <p> {catchPokemon.name} </p>
                    <p> {catchPokemon.type} </p>
                    <p> {catchPokemon.averageWeight.value}{catchPokemon.averageWeight.measurementUnit}</p>
                    <a href={catchPokemon.moreInfo} target='_blank'> {catchPokemon.name} Wiki</a>
                </div>
                <img src={catchPokemon.image} alt={`Essa é uma ilustração do ${catchPokemon.name}`} />
            </div>
        )
    }
}

export default Pokemon;