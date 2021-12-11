document.querySelector("#elementoOndeVoceEsta").style.backgroundColor = "blue";
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color =
  "green";
document.querySelector("#primeiroFilhoDoFilho").innerText =
  "Texto do primeiro filho do filho";
document.querySelector("#pai").firstElementChild.innerText = "primeiro filho";
document.querySelector("#elementoOndeVoceEsta").firstElementChild.style.color =
  "white";
document.querySelector(
  "#elementoOndeVoceEsta"
).parentNode.style.backgroundColor = "orange";
document.querySelector("#elementoOndeVoceEsta").nextElementSibling.innerText =
  "Terceiro filho do pai";
document.querySelector(
  "#pai"
).lastElementChild.previousElementSibling.style.color = "black";

// Fixando parte II
let criando = document.createElement("section");
criando.innerText = "ola";
document.querySelector("#pai").appendChild(criando);
let criando2 = document.createElement("section");
criando2.innerText = "ola";
document.querySelector("#elementoOndeVoceEsta").appendChild(criando2);
let criando3 = document.createElement("section");
criando3.innerText = "ola";
document.querySelector("#primeiroFilhoDoFilho").appendChild(criando3);

// Fixando parte III

let pai = document.querySelector("#pai");
let filho = document.querySelector("#elementoOndeVoceEsta");
let filho2 = document.querySelector("#primeiroFilhoDoFilho");
let remover = document.querySelectorAll("section");

for (let index = 0; index < remover.length; index += 1) {
  let elemento = remover[index];
  if (elemento !== filho && elemento !== pai && elemento !== filho2) {
    elemento.remove();
  }
}
