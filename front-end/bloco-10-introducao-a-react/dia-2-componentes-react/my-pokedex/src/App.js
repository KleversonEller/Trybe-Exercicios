import React, { Component } from 'react';
import Pokedex from './components/pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>POKEDEX</h1>
        <Pokedex />
      </main>
    );
  }
}

export default App;
