// testingScope(true);

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

//! Exercicio 1 - Refatorando o codigo acima 

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }


//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   // Seu código aqui.

//   console.log(oddsAndEvens); // será necessário alterar essa linha 😉

  //! Exercicio 2 - Refatorando o codigo acima 


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
const ordena = (a, b) => (a < b) ? -1 : 1;

  console.log(oddsAndEvens.sort(ordena)); // será necessário alterar essa linha 😉
  