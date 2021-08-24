/*
2.Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
Através de um loop for , percorra essa variável, busque os números pares e os adicione 
a um novo array que deverá ser retornado ao final pela pela função.
*/
function arrayOfNumbers(vector) {
    let par = []
    for (let index in vector) {
        for (let internal in vector[index]) {
            if (vector[index][internal] % 2 === 0) {
                par.push(vector[index][internal]);
            }
        }
    }
    return par;
}

let aVector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(arrayOfNumbers(aVector));

