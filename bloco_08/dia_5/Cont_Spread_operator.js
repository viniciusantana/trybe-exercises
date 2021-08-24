// Faça uma lista com as suas frutas favoritas
const specialFruit = ['batata', 'bacon', 'fruta proibida'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Xulambs', 'brinks', 'bode'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));