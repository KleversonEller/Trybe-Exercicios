const acordar = () => `Acordando!!`;
const cafe = () => `Bora tomar café!!`;
const dormi = () => `Partiu dormir!!`;

const doingThings = (fun) => fun();

console.log(doingThings(acordar));
console.log(doingThings(cafe));
console.log(doingThings(dormi));