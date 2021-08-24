const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (Age) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((obj) => (obj.age === Age));
      if (animal.length !== 0) {
        return resolve(animal);
      }
      return reject({error: 'Nenhum animal com essa idade!' });
    }, 100);
  });
};

// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      return findAnimalByAge(1).then(animal => {
        console.log('AAAAAAAA', animal);
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByAge(4).catch(error =>
        expect(error.error).toEqual('Nenhum animal com essa idade!')
      );
    });
  }); 
}); 
