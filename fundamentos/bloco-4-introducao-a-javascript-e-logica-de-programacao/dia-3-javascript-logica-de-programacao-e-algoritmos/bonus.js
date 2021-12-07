let resultado = [];
let valor = 5;

for (let index = 1; index <= valor; index += 1){
    resultado.push("*");
}
for(let index = 1; index <= valor; index += 1){
    console.log(resultado.join(""));
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

let resultado4 = [];
let valor4 = 5;

for (let index = 0; index <= valor4; index += 1){
    resultado4.push(" ");
}
for(let index = 0; index < valor4 -2; index += 1){
        resultado4[index + 3] = "*"
        resultado4[(resultado4.length) - (index + 3)] = "*"
        console.log(resultado4.join(""));
    }

// // Imprime uma pirâmide de '*'
