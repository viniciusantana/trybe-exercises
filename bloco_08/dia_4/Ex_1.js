const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  //1 - Dada uma matriz, transforme em um array. 
  // escreva seu código aqui
  return arrays.reduce((acumulador, valorAtual) => (
    acumulador.concat(valorAtual)
  ), []);

}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
