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

//! Exercicio 2 qual a maior palavra da frase

const maiorPalavra = frase => {
    let maiorPalavra = null;
    let resultado = 0;
    for (let palavra of frase.split(" ")){
        if (palavra.length > resultado) {
            resultado = palavra.length;
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra
};

console.log(maiorPalavra("Bom dia a todos"));

//! Exercicio 3 contando quantidade de clicks

const botao = document.querySelector('#click')

botao.addEventListener('click', () => {
    let contador = document.querySelector('#conta');
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
})


//! Exercicio 4 concatenando frases
const skills = ['lint', 'bibliotecas', 'ES6.7.8...', 'programação'];
const euSou = palavra => `Eu sou ${palavra} por estudar`;
const formaFrase = (palavra1, palavra2) => `${euSou(palavra1)} ${skills.sort().join(', ')} enquanto uso ${palavra2}`;

console.log(formaFrase('louco', 'pijama azul'));