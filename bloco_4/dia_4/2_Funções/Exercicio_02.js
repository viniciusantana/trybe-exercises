/*

    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
*/
 
function maiorValor (inteiros){
    let maior = 0;
    for(index = 1; index < inteiros.length - 1; index++){
        if( inteiros[maior] < inteiros[index]){
            maior = index;
        }
    }
    return maior;
}

let teste = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(teste));
