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
