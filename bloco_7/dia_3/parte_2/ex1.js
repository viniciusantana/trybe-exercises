//Escreva a função addOne para passar nos testes já implementados. 

const assert = require('assert');
// escreva a função addOne aqui
const addOne = (insertArray) => {
    let add = [];
    for(let index = 0; index < insertArray.length; index++) {
        add[index] = insertArray[index] + 1;
    }
    return add;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);