/*
    1.Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false
*/

function Palindrome (name){
    let letrasaComparar = Math.trunc(name.length / 2);
    let tamanhoName = name.length - 1;
    let resposta;

    for(index = 0; index < letrasaComparar; index++){
        if(name[index] !== name[tamanhoName - index]){
            resposta = false;
            break;
        }else{
            resposta = true;
        }
    }
    return resposta;

}

console.log(Palindrome('aaa'));