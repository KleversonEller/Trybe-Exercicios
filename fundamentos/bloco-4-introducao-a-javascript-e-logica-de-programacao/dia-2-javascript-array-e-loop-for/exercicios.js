let numbers = [5, 9, 3, 19, 70, 13, 120, 2, 35, 27];

for (const imprimir of numbers) {
    console.log(imprimir);
}

// exercício imprimindo valores de um array
let resultado = 0;
for ( let index = 0; index < numbers.length; index += 1) {
    resultado = resultado + numbers[index];
}

console.log(resultado);

// exercício imprimir a soma dos valores no array

// aproveitando o código de cima para esse exercício
 let media = resultado / numbers.length;

 console.log(media);

 // exercício imprime a media da soma dos valores de um array

 if (media <= 20){
     console.log("Valor menor ou igual a 20");
 }else {
     console.log("Valor maior que 20");
 }

 // exercício imprime se a media é maior ou menor/igual a 20

let valorDeComparacao = null;

 for ( let index = 0; index < numbers.length; index += 1){
    if (valorDeComparacao < numbers[index]){
        valorDeComparacao = numbers[index];
    }
 }
 console.log(valorDeComparacao);

// exercício imprime o maior numero de uma array
let cont = null;
for (const contador of numbers) {
    if(contador % 2 === 1){
        cont = cont + 1;
    }
}console.log(cont);

// exercício imprime quanto números ímpares tem dentro da array

let valorDeComparacao2 = null;

 for ( let index = 0; index < numbers.length; index += 1){
     if(valorDeComparacao2 === null){
         valorDeComparacao2 = numbers[index];
        }
    if (valorDeComparacao2 > numbers[index]){
        valorDeComparacao2 = numbers[index];
    }
 }
 console.log(valorDeComparacao2);

 // exercício imprime o menor numero do array

 let numerosAte25 = [];

 for(let index = 1; index <= 25; index += 1){
     numerosAte25.push(index);
 }
 console.log(numerosAte25);

 // exercício imprime uma array com os valores de 1 ate 25

 let divisao = [];

 for(let index = 0; index < numerosAte25.length; index += 1){
    divisao.push(numerosAte25[index] / 2);
 }
 console.log(divisao);

  // exercício imprime uma array com os valores da divisao da array criada anteriormente