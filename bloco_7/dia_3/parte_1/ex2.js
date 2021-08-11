/* 
    A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    a-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    b- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    c-Verifique se o array passado por parâmetro não sofreu alterações
    d-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 */
const assert = require('assert');
const { type } = require('os');

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}
//console.log(typeof(myRemove([1, 2, 3, 4], 3)));


    // implemente seus testes aqui
// A
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
// B
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ]);
// C

// D
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [ 1, 2, 3, 4 ]);

//GABARITO:
/*

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);


 */
