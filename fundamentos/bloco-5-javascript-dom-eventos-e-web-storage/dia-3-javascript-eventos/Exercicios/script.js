function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
for (let dias of dezDaysList) {
  let cria = document.createElement("li");
  cria.innerText = dias;
  cria.classList.add("day");
  if (dias == 25) {
    cria.classList.add("holiday", "friday");
  } else if (dias == 24 || dias == 31) {
    cria.classList.add("holiday");
  } else if (dias == 4 || dias == 11 || dias == 18) {
    cria.classList.add("friday");
  }

  document.querySelector("#days").appendChild(cria);
}

// Cria dinamicamente os elementos dos dias do calendário com os dias e suas classes

function criaBotao(nomeBotao, id) {
  let cria = document.createElement("button");
  cria.innerHTML = nomeBotao;
  cria.id = id;
  document.querySelector(".buttons-container").appendChild(cria);
}
let botao = criaBotao("Feriados", "btn-holiday");

// Cria um botao com um id

let botaoClick = document.querySelector("#btn-holiday");

botaoClick.addEventListener("click", corBotao);

function corBotao(elemento) {
  let dias = document.querySelectorAll(".holiday");
  for (let posicao of dias) {
    if (posicao.style.background == "greenyellow") {
      posicao.style.background = "rgb(238,238,238)";
    } else {
      posicao.style.background = "greenyellow";
    }
  }
}

// Altera a cor de fundo dos feriados ao clicar no botao feriados

let botao2 = criaBotao("Sexta-feira", "btn-friday");

// cria o botao sexta-feira

let botaoClick2 = document.querySelector("#btn-friday");
let sextas = [4, 11, 18, 25];
botaoClick2.addEventListener("click", textoSexta);

function textoSexta(elemento) {
  let dias2 = document.querySelectorAll(".friday");
  for (let posicao in dias2) {
    if (dias2[posicao].innerHTML !== "Mufasa") {
      dias2[posicao].innerHTML = "Mufasa";
    } else {
      dias2[posicao].innerHTML = sextas[posicao];
    }
  }
}

// Altera o texto das sexta-feira
