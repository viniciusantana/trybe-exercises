// 3- Agora inverta o lado do triângulo. Por exemplo: 
let n = 5;
for (let index = 1; index <= n; index++) {
    let strings = '';
    let contador = 0
    for (let indexVazio = 0; indexVazio < n - index; indexVazio++) {
        strings += ' ';
        contador++;
    }
    for (let indexx = contador; indexx < n; indexx++) {
        strings += '*';
    }
    console.log(strings);
}

/*
// Resposta do site:
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
*/