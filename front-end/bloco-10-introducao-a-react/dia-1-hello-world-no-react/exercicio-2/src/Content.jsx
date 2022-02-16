import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render () {
        return (
            conteudos.map((objeto) =>
                <ul>
                    <li>{`O conteúdo é: ${objeto.conteudo}`}</li>
                    <li>{`Status: ${objeto.status}`}</li>
                    <li>{`Bloco: ${objeto.bloco}`}</li>
                </ul>
        )
        )
    }
}

export default Content;