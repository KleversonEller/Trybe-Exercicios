//* 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arr) {
    // escreva seu código aqui
    return arr.reduce((result, valor) => result.concat(valor));
  };

console.log(flatten(arrays));

//! Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//*   2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(arr) {
    // escreva seu código aqui
    return arr.reduce((result, valor) => result.concat(valor.author.name), []).join(', ');
  };

  console.log(reduceNames(books));

//*   3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(arr) {
    // escreva seu código aqui
    const result = arr.reduce((result, objeto) => result + (objeto.releaseYear - objeto.author.birthYear), 0);
    return result / arr.length
    };

  console.log(averageAge(books));

//*   4 - Encontre o livro com o maior nome.

function longestNamedBook(arr) {
    // escreva seu código aqui
    return arr.reduce((resul, objeto) => {
        objeto.name.length > resul.length
        return resul
    });
  };

  console.log(longestNamedBook(books));

//*   5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

function containsA(arr) {
    // escreva seu código aqui
    return arr.reduce((result, palavra) => result + palavra.split('')
              .filter((letra) => letra === 'A' || letra === 'a').length, 0);   
  };

  console.log(containsA(names));

//*   6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arr1, arr2) {
  // escreva seu código aqui
    return arr1.map((nome, index) => ({
        nome: nome,
        average: arr2[index].reduce((resultado, valor) => (resultado + valor)) / arr2[index].length
    }));
};

console.log(studentAverage(students, grades));
