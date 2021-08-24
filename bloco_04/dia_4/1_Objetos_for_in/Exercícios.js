let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
console.log('----EXERCÍCIO 1----')
console.log('Bem-vinda, ' + info.personagem );

//2.Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
console.log('----EXERCÍCIO 2----')
info.recorrente = 'Sim';
console.table(info);

//3.Faça um for/in que mostre todas as chaves do objeto. 
console.log('----EXERCÍCIO 3----')
for(let key in info){
  console.log(key);
}

//4.Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 
console.log('----EXERCÍCIO 4----')
for(let key in info){
  console.log(info[key]);
}

//5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
//'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 
//'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 
console.log('----EXERCÍCIO 5----')
let infoB = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};


for(let key in info){
  if(info[key] !== infoB[key]){
    console.log(info[key] + ' e ' + infoB[key]);
  }else{
    console.log('Ambos recorrentes // Atenção para essa última linha!')
  }
}
/*
Valor esperado:
  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!
*/