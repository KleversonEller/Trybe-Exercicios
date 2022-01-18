const acordar = () => `Acordando!!`;
const cafe = () => `Bora tomar café!!`;
const dormi = () => `Partiu dormir!!`;

const doingThings = (fun) => console.log(fun());

doingThings(acordar);
doingThings(cafe);
doingThings(dormi);