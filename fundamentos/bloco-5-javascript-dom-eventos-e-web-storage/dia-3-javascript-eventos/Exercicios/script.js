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

let botao = document.createElement("button");
botao.innerText = "Feriados";
botao.id = "btn-holiday";

document.querySelector(".buttons-container").appendChild(botao);
