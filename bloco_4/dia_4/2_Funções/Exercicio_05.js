/*

    Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .
*/

function maisRepetido (arrayInteiros){
    let principal = arrayInteiros[0];
    let repeticoes = 0;
    for(index = 0; index < arrayInteiros.length; index++){
        let contador = 0;
        for(verifica = 0; verifica < arrayInteiros.length; verifica++){
            if(arrayInteiros[index] === arrayInteiros[verifica]){
                contador++;
            }
        }
        if(repeticoes < contador){
            repeticoes = contador;
            principal = arrayInteiros[index];
        }
    }
    return principal;
}

let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepetido(teste));
