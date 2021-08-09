let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
*/
let somaArray = 0;

for (let index = 0; index < numbers.length; index++) {
    somaArray += numbers[index];
}
console.log(somaArray);

/*
//Outra forma

for(let index of numbers){
    somaArray += index;
}
console.log(somaArray);

*/