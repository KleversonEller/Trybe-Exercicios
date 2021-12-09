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
