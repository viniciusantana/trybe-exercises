// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

let n = 5;
let symbol = '*';
let Line = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    Line = Line + symbol;
    console.log(Line);
};

/*
Gabarito oficial:

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};

*/