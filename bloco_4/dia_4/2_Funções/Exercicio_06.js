/*

    Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function somaCrescente (n){
    let soma = 0;
    for(let index = 0; index <= n; index++){
        soma += index;
    }
    return soma;
}
console.log(somaCrescente(5));