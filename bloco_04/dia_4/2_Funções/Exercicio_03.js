/*
    3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .
*/

function menorValor (inteiros){
    let menor = 0;
    for(index = 1; index < inteiros.length; index++){
        if( inteiros[menor] > inteiros[index]){
            menor = index;
        }
    }
    return menor;
}

let teste = [2, 4, 6, 7, 10, 0, -3];
console.log(menorValor(teste));
