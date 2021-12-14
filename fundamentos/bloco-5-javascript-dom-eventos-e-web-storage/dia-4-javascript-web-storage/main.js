window.onload = function () {
  let corDofundo = document.querySelector("#fundo");

  corDofundo.addEventListener("change", function (evento) {
    let fundo = evento.target.value;
    let pagina = document.querySelector("body");
    pagina.style.backgroundColor = fundo;
  });

  let corDaLetra = document.querySelector("#letra");

  corDaLetra.addEventListener("change", function (evento) {
    let letra = evento.target.value;
    let paragrafo = document.querySelector("p");
    paragrafo.style.color = letra;
  });
};
