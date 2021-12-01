let numbers = [5, 9, 3, 19, 70, 8, 120, 2, 35, 27];

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
     let comparador = numbers[index];
    if (valorDeComparacao < comparador){
        valorDeComparacao = numbers[index];
    }
 }
 console.log(valorDeComparacao);

// exercício imprime o maior numero de uma array