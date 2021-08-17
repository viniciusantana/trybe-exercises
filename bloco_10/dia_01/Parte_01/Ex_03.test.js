const myRemoveWithoutCopy = require('./Ex_03');


/* 
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
 */
describe('myRemoveWithoutCopy', () => {
    test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado ', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 3)).toEqual([1, 2, 4]);
    });
    
    test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3, 4]);
    });
    /* test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
        const myArray = [1, 2, 3, 4];
    }); */
    test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado ', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(myArray, 5)).toEqual([1, 2, 3, 4]);
    });


});
