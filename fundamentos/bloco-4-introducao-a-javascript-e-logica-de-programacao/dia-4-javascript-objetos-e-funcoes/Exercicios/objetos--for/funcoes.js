function palindromo(palavra) {
  let reverter = [];
  for (let letra of palavra) {
    reverter.push(letra);
  }
  if (palavra === reverter.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

// Function que verifica se uma palavra é um palíndromo

function maiorValor(array) {
  let comparador = null;
  for (let valor in array) {
    if (comparador === null) {
      comparador = valor;
    }
    if (array[comparador] < array[valor]) {
      comparador = valor;
    }
  }
  return comparador;
}

// Function que retorna o índice do maior valor da array

function menorValor(array) {
  let comparador = null;
  for (let valor in array) {
    if (comparador === null) {
      comparador = valor;
    }
    if (array[comparador] > array[valor]) {
      comparador = valor;
    }
  }
  return comparador;
}

// Function que retorna o índice do menor valor da array

function maiorNome(array) {
  let comparador = 0;
  let contador = 0;
  let resultado = null;

  for (let nome of array) {
    for (let letras of nome) {
      contador += 1;
    }
    if (contador > comparador) {
      comparador = contador;
      resultado = nome;
    }
    contador = 0;
  }
  return resultado;
}

// Function que retorna o maior nome de um array

function maiorRepetidor(array) {
  let comparador = null;
  let contador = 0;
  let repetição = 0;

  for (let numero of array) {
    for (let repetido of array) {
      if (numero == repetido) {
        contador += 1;
      }
    }
    if (contador > repetição) {
      repetição = contador;
      comparador = numero;
    }
    contador = 0;
  }
  return comparador;
}

// Function que retorna o numero que mais se repete em um array

function somatoria(numero) {
  let resultado = 0;
  for (let soma = 1; soma <= numero; soma += 1) {
    resultado += soma;
  }
  return resultado;
}

// Function que retorna a somatório de 1 ate 'N'

function verificaFimPalavra(word, ending) {
  let palavra1 = [];
  let palavra2 = [];
  let resultado = true;
  for (let letra of word) {
    palavra1.push(letra);
  }
  for (let letra of ending) {
    palavra2.push(letra);
  }
  palavra1.reverse();
  palavra2.reverse();
  for (let posicao in ending) {
    if (palavra1[posicao] != palavra2[posicao]) {
      resultado = false;
    }
  }
  return resultado;
}

// Function que verifica se a segunda palavra é o final da primeira palavra
