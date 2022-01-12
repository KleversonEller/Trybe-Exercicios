//! Exercicio calculando o fatorial de um numero

const fatorial = numero => {
    let resultado = 1;
    for (let index = 1; index <= numero; index += 1){
        resultado *= index
    }
    return resultado
}

console.log(fatorial(5));

//! Bonus fatorial recursivo 

const fatorialRecursivo = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;

console.log(fatorialRecursivo(5));
