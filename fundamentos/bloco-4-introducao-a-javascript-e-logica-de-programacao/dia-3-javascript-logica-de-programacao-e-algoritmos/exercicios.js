let fatorial = 10;
let resultado = fatorial;

for (let index = 1; index < fatorial; index += 1){
    resultado = resultado * (fatorial-index);
}
console.log(resultado);

// Imprime o fatorial de 10

let word = 'binho';
let wordInverso = "";

for (let inverte in word){
    let letra = (word.length - inverte) - 1;
    wordInverso = wordInverso + word[letra];
}
console.log(wordInverso);