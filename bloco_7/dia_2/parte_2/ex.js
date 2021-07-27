const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


/* 1.Crie uma função para adicionar o turno da manhã na lesson2 . 
Essa função deve possuir três parâmetros, sendo eles: 
o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/
const addKeyValue = (objectA, key, value) => {
    objectA[key] = value;
}
addKeyValue(lesson2, 'turno', 'manhã');
console.table(lesson2);

//2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keyList = (objectB) => console.table(Object.keys(objectB));
keyList(lesson3);

//3.Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (objectC) => console.log(Object.keys(objectC).length);
objectLength(lesson2);

//4.Crie uma função para listar os valores de um objeto.Essa função deve receber um objeto como parâmetro.
const valueList = (objectD) => console.table(Object.values(objectD));
valueList(lesson1)

/* 5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */

//console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);


//6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const students = (objectE) => {
    const a = objectE.lesson1.numeroEstudantes;
    const b = objectE.lesson2.numeroEstudantes;
    const c = objectE.lesson3.numeroEstudantes;
    return a + b + c;
}
console.log('Número de estudantes: ', students(allLessons));
//7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
/* console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */

//8.Crie uma função que verifique se o par (chave / valor) existe na função. 
//Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 

/* console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
 */
