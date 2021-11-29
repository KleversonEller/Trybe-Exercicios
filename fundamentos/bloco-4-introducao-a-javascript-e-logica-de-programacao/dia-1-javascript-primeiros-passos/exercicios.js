const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// exercícios utilizando os cada operação aritmética básica.

const primeiroNumero = 25;
const segundoNumero = 35;

if (primeiroNumero > segundoNumero) {
    console.log(primeiroNumero);
} else {
    console.log(segundoNumero);
}

// exercícios que retorna o maior numero dentre dois números.

const primeiroNumeros = 9;
const segundoNumeros = 48;
const terceiroNumeros = 58;

if (primeiroNumeros > segundoNumeros && primeiroNumeros > terceiroNumeros) {
    console.log(primeiroNumeros);
} else if (segundoNumeros > primeiroNumeros && segundoNumeros > terceiroNumeros) {
    console.log(segundoNumeros);
} else {
    console.log(terceiroNumeros);
}

// exercícios que retorna o maior numero dentre tres números.

const positivoOuNegativo = 'azul';


if (typeof positivoOuNegativo == 'number' && positivoOuNegativo % 2 === 0) {
    console.log("Numero Positivo");
}else if (typeof positivoOuNegativo == 'number' && positivoOuNegativo % 2 !== 0){
    console.log("Numero Negativo");
}else {
    console.log("Não é um numero !");
}