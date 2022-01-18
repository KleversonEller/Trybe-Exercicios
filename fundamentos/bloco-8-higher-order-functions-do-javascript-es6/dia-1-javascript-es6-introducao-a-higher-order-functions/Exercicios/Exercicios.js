//! Exercício 1

const newUser = (nome, sobrenome) => ({
    nome: `${nome} ${sobrenome}`,
    email:  `${nome}${sobrenome}@trybe.com`
});

const newEmployees = (fun) => {
    const employees = {
      id1: fun('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: fun('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: fun('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(newUser));

  //! Exercício 2

  const sorteio = (nun) => Math.ceil(Math.random() * 5) === nun;
  const resultadoSorteio = (num) => sorteio(num) === true ? 'Parabéns você ganhou': 'Tente novamente';

  console.log(resultadoSorteio(2));

  //! Exercício 3

  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

  const corretor = (gabarito , respostas) => {
      let nota = 0;
      for (index = 0; index < gabarito.length; index += 1) {
          if(respostas[index] === gabarito[index]){
              nota += 1;
          } else if (respostas[index] !== gabarito[index] && respostas[index] !== 'N.A'){
              nota -= 0.5;
          }
      }
      return nota;
  }

  const suaNota = (gabarito, respostas, fun) => fun(gabarito, respostas);

  console.log(suaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));