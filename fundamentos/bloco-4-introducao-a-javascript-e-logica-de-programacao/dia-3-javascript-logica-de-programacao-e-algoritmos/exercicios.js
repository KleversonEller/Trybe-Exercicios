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
    let letra = (word.length - inverte) -1;
    wordInverso = wordInverso + word[letra];
}
console.log(wordInverso);

// Imprime a variável ao contrario

let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparador = 0;
let resultado2 = null;
let cont = 0;
for(let palavra of array){
   cont = palavra.length
    if (comparador < cont){
        comparador = cont;
        resultado2 = palavra;
    }
}
console.log(resultado2);

// Imprime qual a maior palavra dentro do array