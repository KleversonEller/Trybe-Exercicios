let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let nomes in names) {
  console.log("Ola " + names[nomes]);
}

// Imprime 'ola' para cada nome dentro do array

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let keys in car) {
  console.log(keys + ": " + car[keys]);
}

// Imprime as chaves e valores do objeto
