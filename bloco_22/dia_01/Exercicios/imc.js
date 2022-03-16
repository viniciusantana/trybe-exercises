/* 
Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa. 
 */
const imc = (peso, altura) => {
  return peso / altura ** 2;
}
// 2. Agora, permita que o script seja executado através do comando npm run imc
console.log(imc(80, 1.67));
