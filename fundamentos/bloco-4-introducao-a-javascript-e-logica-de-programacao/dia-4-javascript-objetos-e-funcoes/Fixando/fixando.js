let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

// Criando um objeto

console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " tem " +
    player.age +
    " anos de idade"
);

// Imprimindo uma frase com valores do objeto

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player.bestInTheWorld);

// Adicionando uma nova Kay no objeto playe

console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " foi eleita a melhor do mundo por " +
    player.bestInTheWorld.length +
    " vezes"
);

// Imprime uma frase com a quantidade de vitorias da jogadora dentro do objeto player

console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata"
);

// Imprime a quantidade de medalhas que a jogadora tem contidas dentro do objeto medals que esta dentro do objeto
