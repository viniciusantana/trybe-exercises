/* 
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um 
email no formato nome_da_pessoa@trybe.com . 
 */
const newJob = (name) => {

    const email = `${name.replace(/\s/g, '_')}@trybe.com`;
    return {fullName: name, email: email};
}
console.log(newJob('aa aaa aa'));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra').fullName, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Pedro Guerra').fullName, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Pedro Guerra').fullName, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(newJob));

  // Modo 1
  /*
  const newJob = (name) => {

    const email = `${name.replace(/\s/g, '_')}@trybe.com`;
    return {fullName: name, email: email};
}
console.log(newJob('aa aaa aa'));

const newEmployees = (user1, user2, user3) => {
    const employees = {
      id1: user1.fullName, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: user2.fullName, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: user3.fullName, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(newJob('Pedro Guerra'), newJob('Luiza Drumond'), newJob('Carla Paiva')));
*/