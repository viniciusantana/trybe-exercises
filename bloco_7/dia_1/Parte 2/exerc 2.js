/* 
    Crie uma função que receba uma frase e retorne qual a maior palavra.

    Exemplo:
    longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/

const longestWord = (x) => {
    let strings = x.split(' ');
    let maior;
    for (let index of strings) {
        console.log(index);
        if(index.length > strings[index -1].length) {
            maior = strings[index];
            console.log(maior);
        }
    }
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'


