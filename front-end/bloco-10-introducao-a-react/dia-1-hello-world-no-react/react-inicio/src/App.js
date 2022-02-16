import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Comer', 'Estudar', 'Codar', 'Dormir'];

class App extends Component {
  render() {
    return (
      tarefas.map((tarefa) => <ul> {Task(tarefa)} </ul>)
    );
  }
}

export default App;
