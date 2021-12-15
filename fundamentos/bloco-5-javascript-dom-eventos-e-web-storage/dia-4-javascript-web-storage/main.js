window.onload = function () {
  let corDofundo = document.querySelector("#fundo");

  corDofundo.addEventListener("change", function (evento) {
    let fundo = evento.target.value;
    let pagina = document.querySelector("body");
    pagina.style.backgroundColor = fundo;

    localStorage.setItem("Cor do fundo", fundo);
  });

  let corDaLetra = document.querySelector("#letra");

  corDaLetra.addEventListener("change", function (evento) {
    let letra = evento.target.value;
    let paragrafo = document.querySelector("p");
    paragrafo.style.color = letra;

    localStorage.setItem("Cor da letra", letra);
  });

  let tamanhoLetra = document.querySelector('input[name = "fonte"]');

  tamanhoLetra.addEventListener("change", function (evento) {
    let tamanho = evento.target.value;
    let paragrafo = document.querySelector("p");
    if (tamanho === "") {
      paragrafo.style.fontSize = "medium";
    } else {
      paragrafo.style.fontSize = tamanho + "px";
    }

    localStorage.setItem("Tamanho da fonte", tamanho + "px");
  });

  let tamanhoLinha = document.querySelector("#linha");

  tamanhoLinha.addEventListener("change", function (evento) {
    let espaco = evento.target.value;
    let paragrafo = document.querySelector("p");
    paragrafo.style.lineHeight = espaco;

    localStorage.setItem("Espaçamento entre linhas", espaco);
  });

  let tipoFonte = document.querySelector("#fonte");

  tipoFonte.addEventListener("change", function (evento) {
    let fonte = evento.target.value;
    let paragrafo = document.querySelector("p");
    paragrafo.style.fontFamily = fonte;

    localStorage.setItem("Tipo da fonte", fonte);
  });
  let paragrafo = document.querySelector("p");
  let fonteSalva = localStorage.getItem("Tipo da fonte");
  paragrafo.style.fontFamily = fonteSalva;

  let espacoSalvo = localStorage.getItem("Espaçamento entre linhas");
  paragrafo.style.lineHeight = espacoSalvo;

  let tamanhoSalvo = localStorage.getItem("Tamanho da fonte");
  paragrafo.style.fontSize = tamanhoSalvo;

  let corLetraSalvo = localStorage.getItem("Cor da letra");
  paragrafo.style.color = corLetraSalvo;

  let corFundoSalvo = localStorage.getItem("Cor do fundo");
  let pagina = document.querySelector("body");
  pagina.style.backgroundColor = corFundoSalvo;
};
