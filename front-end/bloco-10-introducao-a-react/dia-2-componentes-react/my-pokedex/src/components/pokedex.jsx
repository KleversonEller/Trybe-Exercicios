import React,{Component} from 'react';
import Pokemon from './pokemon';
import pokemons from '../data';

class Pokedex extends Component {
    render(){
        return(
            <section>
                {pokemons.map((objeto) => <Pokemon key={objeto.id} catchPokemon={ objeto} />)}
            </section>
        )
    }
}

export default Pokedex;