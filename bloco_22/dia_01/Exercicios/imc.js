// https://www.npmjs.com/package/readline-sync#utility_methods
const readline = require('readline-sync');
 
// 1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa. 

const imc = (peso, altura) => {
  return peso / altura ** 2;
}
// 2. Agora, permita que o script seja executado através do comando npm run imc
console.log(imc(80, 1.67));

// Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa. 
const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

console.log(imc(peso, altura));