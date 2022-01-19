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

  //* 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  function authorBornIn1947(arr, ano) {
    // escreva aqui o seu código
    return arr.find((autor) => autor.author.birthYear === ano).author.name;
  };

  console.log(authorBornIn1947(books, 1947));


  //* 2 - Retorne o nome do livro de menor nome.

function smallerName(arr) {
  let nameBook;
  // escreva aqui o seu código
  arr.forEach((elemento) => nameBook === undefined ? nameBook = elemento.name : nameBook.length > elemento.name.length ? nameBook = elemento.name:'');

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(smallerName(books));

//* 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr) {
  // escreva seu código aqui
  return arr.find((livro) => livro.name.length === 26).name;
};

console.log(getNamedBook(books));

//* 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
  // escreva aqui seu código
  return arr.sort((a,b) => a.releaseYear < b.releaseYear ? 1 : -1);
};

console.log(booksOrderedByReleaseYearDesc(books));

//* 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((seculo) => seculo.author.birthYear > 2000);
};

console.log(everyoneWasBornOnSecXX(books));

//* 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((lancamento) => lancamento.releaseYear < 1990 && lancamento.releaseYear >= 1980);
};

console.log(someBookWasReleaseOnThe80s(books));

//* 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique(arr) {
  // escreva seu código aqui
   return arr.every((niver) => !arr.some((autor) => (autor.author.birthYear === niver.author.birthYear) && (autor.author.name !== niver.author.name)));
};

console.log(authorUnique(books));
