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

