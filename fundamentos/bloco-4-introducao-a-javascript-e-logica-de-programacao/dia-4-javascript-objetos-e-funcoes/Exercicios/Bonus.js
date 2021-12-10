function conversor(valor) {
  let resultado = null;
  let numeros = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
  };
  let divsaoValor = valor.split("");
  for (let posicao in divsaoValor) {
    for (let comparador in numeros) {
      if (divsaoValor[posicao] == comparador) {
        divsaoValor[posicao] = numeros[comparador];
      }
    }
  }
  for (let numero = 0; numero < divsaoValor.length; numero += 1) {
    if (resultado == null) {
      resultado = divsaoValor[0];
    } else if (divsaoValor[numero] > divsaoValor[numero - 1]) {
      resultado = divsaoValor[numero] - resultado;
    } else {
      resultado = resultado + divsaoValor[numero];
    }
  }
  return resultado;
}

console.log(conversor("XXIV"));

// FIXME  fazer uma logica para calcular quando um numero menor estiver entre dois numeros maiores

function arrayOfNumbers(vector) {
  let resultado = [];
  for (let posicao of vector) {
    for (let numeros of posicao) {
      if (numeros % 2 == 0) {
        resultado.push(numeros);
      }
    }
  }
  return resultado;
}

console.log(
  arrayOfNumbers([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);

// Function que retorna um array contendo todos os numeros pares do array de entrada
