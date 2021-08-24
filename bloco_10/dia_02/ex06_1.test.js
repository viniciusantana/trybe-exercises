const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((obj) => (obj.name === name));
      if (animal) {
        return resolve(animal);
      }
      return reject({error: 'Nenhum animal com esse nome!' });
    }, 100);
  });
};

const getAnimal = (names) => {
  return findAnimalByName(names).then(animal => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return findAnimalByName('Dorminhoco').then(animal => {
        console.log('AAAAAAAA', animal);
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error =>
        expect(error.error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
}); 
