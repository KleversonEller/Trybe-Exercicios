let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Criando o objeto

console.log("Boas-vindas, " + info.personagem);

// Imprime boas vindas para o personagem dentro do objeto info

info.recorrente = "Sim";

console.log(info);

// Adiciona uma key e imprime o objeto info

for (let keys in info) {
  console.log(keys);
}

// Imprime todas as keys do objeto

for (let keys in info) {
  console.log(info[keys]);
}

// Imprime todos os valores do objeto

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let valor in info) {
  if (info[valor] == info2[valor]) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[valor] + " e " + info2[valor]);
  }
}

// Criar um novo objeto e imprimir os valores dos dois objetos no formato solicitado

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    leitor.livrosFavoritos[0]["titulo"]
);

// Imprime a frase solicitada utilizando os valores do objeto
