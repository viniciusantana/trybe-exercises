/*
 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/


let n = 5;

for (let index = 0; index < n; index++) {
    let strings = '';
    for (let indexx = 0; indexx < n; indexx++) {
        strings += '*';
    }
    console.log(strings);
}

/*
Resposta do site

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}
*/