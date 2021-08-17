const sum = require('./Ex_01');

test('Verifica soma', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 7)).toBe(6);
    expect(sum(0, 9)).toBe(9);
    expect(sum(11, 222)).toBe(233);
});

test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" ', () => {
    expect(() => sum(4, "5")).toThrow();
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
});

