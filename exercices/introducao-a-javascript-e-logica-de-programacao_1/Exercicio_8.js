/*
    8.Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

    Bonus: use somente um if .
*/

let a = 1;
let b = 2;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

/*
Gabarito site:
let a = 1;
let b = 3;
let c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);
*/