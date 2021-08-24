/* 
    Crie uma função que receba um número e retorne seu fatorial.

    Na matemática, o fatorial de um número não negativo N , com a notação N! ,
     é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
     Spoiler: É possível resolver com uma linha usando ternary operator .
*/

/* 
http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/
https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f
https://www.google.com/search?channel=fs&client=ubuntu&q=fatorial
 */

/* const fatorial = (n) => {
    let fat = (n === 0)? 1 : n* fatorial(n-1);
    return fat;
}

console.log(fatorial(5)); */


// function(N) {SE (N===0)? ENTÃO RETORNE 0 : SENÃO RETORNE N * function (N - 1) }

/* 
 function(4) {(4===0)? NÃO =>> RETORNE 4 * function ( // 6
    function(3) {(3===0)? NÃO =>> RETORNE 3 * function ( // 2
        function(2) {(2===0)? NÃO =>> RETORNE 2 * function ( // 1
            function(1) {(1===0)? NÃO =>> RETORNE 1 * function ( //1
                function(0) {(0===0)? NÃO =>> RETORNE 1 }) }  
        ) }) }) }
 */
const fatorial = (n) => (n === 0)? 1 : n* fatorial(n-1);
console.log(fatorial(5))
