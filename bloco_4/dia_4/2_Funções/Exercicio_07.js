/*

    Crie uma função que receba uma string word e outra string ending . 
    Verifique se a string ending é o final da string word . 
    Considere que a string ending sempre será menor que a string word .

    Valor de teste: 'trybe' e 'be'
    Valor esperado no retorno da função: true
    verificaFimPalavra('trybe', 'be') ;
    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan') ;
    Retorno esperado: false
*/

function verificaFimPalavra(word, ending){
   let initialWord = word.length - ending.length;
   let checker;
   let endingChecker = 0;

   for(let index = initialWord; index < word.length; index++){
       if(word[index] !== ending[endingChecker]){
           checker = false;
           break;
       }else{
           checker = true;
       }
       endingChecker++;
   }
   return checker;
}
console.log(verificaFimPalavra('trybe', 'be'));