let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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