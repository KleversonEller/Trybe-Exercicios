let resultado = "";
let valor = 5;

for (let index = 1; index <= valor; index += 1){
    resultado += "*";
}
for(let index = 1; index <= valor; index += 1){
    console.log(resultado);
}

// Imprime um quadrado com tamanho equivalentes a um valor dado 

let resultado2 = "";
let valor2 = 5;

for (let index = 1; index <= valor; index += 1){
    resultado2 += "*";
        console.log(resultado2);
}

// Imprime um triângulo com tamanho equivalentes a um valor dado 

let resultado3 = [];
let valor3 = 5;

for( index = 1; index <= valor3; index += 1){
    resultado3.push(" ");
}
for(index = 1; index <= valor3; index += 1){
    resultado3[(resultado3.length)- index] = "*";
    console.log(resultado3.join(''));
}

// Imprime um triângulo invertido com tamanho equivalentes a um valor dado 