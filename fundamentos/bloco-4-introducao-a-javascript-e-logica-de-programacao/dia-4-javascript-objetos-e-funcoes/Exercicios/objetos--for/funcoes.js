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
