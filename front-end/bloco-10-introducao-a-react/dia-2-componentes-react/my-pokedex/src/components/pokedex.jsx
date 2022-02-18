import React,{Component} from 'react';
import Pokemon from './pokemon';
import pokemons from '../data';
import './pokedex.css'

class Pokedex extends Component {
    render(){
        return(
            <section className='container'>
                {pokemons.map((objeto) => <Pokemon key={objeto.id} catchPokemon={ objeto} />)}
            </section>
        )
    }
}

export default Pokedex;