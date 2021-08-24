// Escreva a função wordLengths para passar nos testes já implementados. 

const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (wordsArray) => {
    let lengths = []
    for(let index = 0; index < wordsArray.length; index += 1) {
        lengths[index] = wordsArray[index].length;
    }
    return lengths
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
