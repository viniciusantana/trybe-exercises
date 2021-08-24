/*
    Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda 
*/
function maiorNome (inteiros){
    let maior = 0;
    for(index = 1; index < inteiros.length; index++){
        if( inteiros[maior].length < inteiros[index].length){
            maior = index;
        }
    }
    return inteiros[maior];
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(teste));
