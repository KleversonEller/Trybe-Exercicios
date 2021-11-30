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

const positivoOuNegativo = -2;

if (positivoOuNegativo > 0) {
    console.log("Numero Positivo");
}else if (positivoOuNegativo < 0){
    console.log("Numero Negativo");
}else {
    console.log("0");
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

// exercícios verifica de acordo com os angulos dados se tenho um triangulo valido ou não, sendo que para ele ser valido seus angulos devem ser positivos e a somatoria dos mesmos devem ser igual a 180


let pecaXadrez = 'Dama';

switch (pecaXadrez.toLowerCase()) {
    case 'bispo':
        console.log("Diagonais");
        break;
    case 'peao':
        console.log("Para frente");
        break;
    case 'torre':
        console.log("Linha reta");
        break;
    case 'cavalo':
        console.log("Em 'L'");
        break;
    case 'rainha':
        console.log("Em todas as direções");
        break;
    case 'rei':
        console.log("Em todas as direções apenas 1 casa");
        break;
    default:
        console.log("Essa não é uma peça valida");
        break;
}

// exercícios que verifica uma peça de xadrez e retorna qual movimento ela faz

let nota = 1;

if (nota < 50 && nota > 0){
    console.log("Sua nota é F");
}else if (nota >= 50 && nota < 60){
    console.log("Sua nota é E"); 
}else if (nota >= 60 && nota < 70){
    console.log("Sua nota é D"); 
}else if (nota >= 70 && nota < 80){
    console.log("Sua nota é C"); 
}else if (nota >= 80 && nota < 90){
    console.log("Sua nota é B"); 
}else if (nota >= 90 && nota < 100){
    console.log("Sua nota é A"); 
}else {
    console.log("Essa nao é uma nota valida");
}

// exercícios conversor de nota de '%' para nota entre A e F