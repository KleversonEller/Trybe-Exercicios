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

// exercícios que compara um valor e se for um numero retorna se é positivo ou negativo ou caso nao seja um numero retorna "nao é uma numero"


const angulo1 = 80;
const angulo2 = -100;
const angulo3 = 0;

if (angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0){
    if (angulo1 + angulo2 + angulo3 === 180){
        console.log("Você tem um triângulo");
    }else{
        console.log("Você não tem um triângulo");
    }
}else {
    console.log('Isso não é um triângulo');
}