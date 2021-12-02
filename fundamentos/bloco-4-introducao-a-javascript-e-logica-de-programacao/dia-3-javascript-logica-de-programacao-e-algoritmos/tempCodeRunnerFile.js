
let word = 'tryber';
let wordInverso = "";

for (let inverte in word){
    let letra = (word.length - inverte) + 1;
    wordInverso = wordInverso + word[letra];
}
console.log(wordInverso);