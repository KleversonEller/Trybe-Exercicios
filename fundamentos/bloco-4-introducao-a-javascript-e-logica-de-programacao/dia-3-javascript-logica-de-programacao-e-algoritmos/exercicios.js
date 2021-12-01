let fatorial = 10;
let resultado = fatorial;

for (let index = 1; index < fatorial; index += 1){
    resultado = resultado * (fatorial-index);
}
console.log(resultado);