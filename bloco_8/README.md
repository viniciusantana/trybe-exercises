# BLOCO 8:
## Sumário

- [DIA 1](#dia-1)
  - [First Class Functions](#first-class-functions)
- [DIA 2](#dia-2)
- [DIA 3](#dia-3)
- [DIA 4](#dia-4)
- [DIA 5](#dia-5)


# DIA 1

### [First-Class Functions]

- é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro)

### [HOF]

- É uma função que recebe(ou retorna) outra como parâmetro.

- É uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.
- HOF nos permitem compactar ações e não somente repassar valores.
- A função recebida como argumento por uma HOF é chamada de 'callback'

### [Callback function]**
- Função que é passada por parâmetro e executada em algum momento.
- Quem passa a função por parâmetro não tem controle de quando ela será executada.
- A callback pode demorar 1 milissegundo, 1 minuto ou mais para ser executada.(aula) 
- https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

### [Aula / dicas]
- Função é um tipo de dado como qualquer outro.
- Função .call() => `functionA(x) === functionA.call(x)`
- `.call` é um [syntactic sugar] pesquisar.
- Método de arrays - Anderson leite t14b - https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer


# DIA 2

### [Softskills]
- Glossofobia - Medo de falar em público.
- Você se considera uma pessoa boa ouvinte?
- Você acredita que melhorou sua habilidade de ouvir?
- Qual o seu objetivo para a trilha de comunicão?
- (Grupo)Qual a importância de escutar a outra pessoa para se comunicar bem?
- (Grupo)Quais 5 dicas vocês dariam para exercer a escuta ativa?

### [HOFs Arrays]
- Os arrays possuem várias funções que facilitam sua criação e manipulação, além de deixar seu código muito mais legível e conciso.
- `Array.forEach` => Itera sobre todos os elementos de um array;(não retorna nada por padrão)
- `Array.find` => Encontra o primeiro elemento de um array que satisfaça a uma condição; (e retorna o elemento)
- `Array.some` e `Array.every` => Testa os elementos de um array que satisfazem a uma condição;(retorna true/false)
- `Array.sort` => Ordena arrays de acordo com algum critério. (altera o array original)
- `Array.filter` =>  Retorna(cria) um array com todos os elementos que satisfaçam à condição verificada pela função.
- `Array.map` => Aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
- `Array.reduce` => Executa a função Callback para cada elemento do array, resultando em um único valor de retorno da função reduce.


### [Array.forEach] 
- Para cada(elemento)-faça
- itera sobre todos os elementos de um array.
- percorre o array e executa a função passada para cada um dos seus valores.
- O forEach não retorna nenhum valor 
- A Callback passada para o forEach possui como parâmetros:
    - element - Valor do elemento do array;
    - index - Posição do elemento no array, começando do 0;
    - array - Array original que está sendo percorrido.
```
EXEMPLO:
Array = [A, B, C, D];
Array.forEach((valor, indice(opcional), array(opcional)) => {
  console.log('ELEMENTO:', valor, 'POSIÇÃO:', indice, 'LISTA:', array);
});

RETORNO:
ELEMENTO: A POSIÇÃO: 0 LISTA: [A, B, C, D]
ELEMENTO: B POSIÇÃO: 1 LISTA: [A, B, C, D]
ELEMENTO: C POSIÇÃO: 2 LISTA: [A, B, C, D]
ELEMENTO: D POSIÇÃO: 3 LISTA: [A, B, C, D]
```
### [ARRAY.FIND] 
- É utilizada para achar o primeiro elemento que satisfaça a condição passada.
- a função(callback) que deverá ser passada precisa retornar true ou false.
- A Callback function recebe como parâmetro (valor/element, indice(opcional), array(opcional)).
- Se não encontrar nenhum elemnto a função Find retorna Null/undefined
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
```
Array = [19, 21, 30, 3, 45, 22, 15];
Array.find(((element) => element % 2 === 0) = 30
```

### [ARRAY.SOME] 
- Retorna 'true' se ao menos um elemento de um array satisfaz a uma condição. Caso contrário retorna 'false'.
- Como funciona: A função some testa elemento por elemento do array e só para se for 'true'. caso ao final do array não encontre nenhum elemento retorna 'false'
- Se parece com o operador lógico || (or).
- a função(callback) que deverá ser passada precisa retornar true ou false.
- A Callback recebe como parâmetro (valor/element, indice(opcional), array(opcional)).
- Exemplo- se algum elemento do Array for menor que 18 retorne true:
```
Array.some((value) => value < 18).
[15, 14, 17].some((value) => value < 18) = true
[20, 25, 17].some((value) => value < 18) = true
[20, 18, 19].some((value) => value < 18) = false
```

https://codepen.io/pen/?template=abZoOZz
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

### [ARRAY.EVERY] 
- se-todos
- Retorna true se todos os elementos de um array satisfazem a uma condição
- Se parece com o operador lógico && (and)
- A Callback recebe como parâmetro (valor, indice(opcional), array(opcional)) e retorna true/false.
- Exemplo- se todos os elementos do Array tiverem o valor menor que 18 retorne true:
```
Array.every((value) => value < 18).
[15, 14, 17].every((value) => value < 18) = true
[15, 14, 19].every((value) => value < 18) = false
```

https://codepen.io/pen/?template=NWrKqME
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

### [ARRAY.SORT] 
- ordernar
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://codepen.io/pen/?template=gOMYaXy
- Permite ordenar um array de acordo com algum critério estabelecido.
- A callback recebe dois parâmetros e tem que retornar um number(-1, 0 ou 1.)
- Para ordenar um array em ordem alfabética basta chamar o sort sem nenhum parâmetro.
[B, C, A].sort() = [A, B, C]
- Ordenar números em ordem crescente: ARRAY.sort((a, b) => a - b);
- Ordenar números em ordem decrescente: ARRAY.sort((a, b) => b - a);
```
[40, 100, 1, 5, 25, 10].sort((a, b) => a - b) = [1, 5, 10, 25, 40, 100]
[40, 100, 1, 5, 25, 10].sort((a, b) => b - a) = [ 100, 40, 25, 10, 5, 1 ]
```

### [AULA]
- 14:51 - A ordem dos parâmetros faz diferença e tem que ser respeitada, podendo ser declarada sem ser usada.
- 15:50 - Caso for declarar um parâmetro que não vai ser usado, pode ser declarado como _ (underline) para o lint não reclamar [não testado/Hugo].
- 19:30 - Como a função forEach funciona por dentro?
- 31:50 - Função SOME
- 41:55 - Como a função SOME se parece por dentro?
- Early Return - retornar o resultado da função o quanto antes
https://dorianneto.com.br/boas-praticas/torne-se-um-ninja-das-funcoes-com-early-return/
- 1:05:22 - Função Every
- Dica/pesquisa: Fira code - font ligatures
- 1:14:00 - Função Find.
- 1:26:00 - Função Sort.




# DIA 3

### [Financeiro Trybe] 
- financeiro@betrybe.com 
- Documentação/extratos -> msc@betrybe.com
- Boletos e NFs ->financeiro@betrybe.com

### [ARRAY.FILTER]
- Cria um novo array com todos elemetos que passaram no teste implementado na função fornecida.
- Retorna um array com todos os elementos que satisfaçam à condição verificada pela função, se não, retorna vazio.
- a função(callback) deve retornar true(para manter o elemento) ou false(para tirar o elemento).
- A Callback recebe como parâmetro (valor atual, indice(opcional), array(opcional)).
```
[19, 21, 30, 3, 45, 22, 15].filter((number) => number % 2 === 0) = [ 30, 22 ]
```
### [ARRAY.MAP]
- O método map() invoca a função callback passada por argumento para cada elemento do Array
 e devolve um novo Array como resultado.
- A Callback recebe como parâmetro (valor atual, indice(opcional), array(opcional)).
- A função(callback) deve retornar um elemento do novo Array.
- Callback dever retornar algo, caso contrário será criado um novo array de undefined.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648

### [AULA]
- 10:21 - Como a função Filter funciona?
- 43:00 -string.startsWith('A')  - retorna true se a string começar com a letra A(case sensitive)
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
- 46:30 - string.toUpperCase() - converte string em maiúscula
- 51:09 - req02
- 58:00 - req03
- 1:03:00 - Função MAP
- 1:08:45 -Como funciona a função MAP por dentro?

# DIA 4

### [ARRAY.REDUCE]
- Reduz o array em um único valor.
- Executa a função Callback para cada elemento do array, resultando em um único valor de retorno da função reduce.
- O que é executado em Callback retorna na próxima interação no parâmetro acumulador.
- `callback(acumulador, valorAtual)` acumulador e valorAtual são obrigatórios.
- array.reduce(callback( acumulador, valorAtual, index atual, array org), valorInicial)
- A função Callback recebe 4 parâmetros:
    - Acumulador (acc)
    - Valor Atual (cur)
    - Index Atual (idx)
    - Array original (src)
- (video) - https://www.youtube.com/watch?v=D_MExaVe95w
- (vídeo) - https://www.youtube.com/watch?v=O_bSjsLga48
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
array1.reduce(reducer) // retorno: ( 1 + 2 + 3 + 4 ) = 10.
array1.reduce(reducer, 5) // retorno: (5 + 1 + 2 + 3 + 4) = 15.
```
### [AULA]
- (9:00) Sintaxe
- (13:53) req1 - Exemplo detalhado e com debug 
- (39:50) req1 - segundo parâmetro do reduce (valor inicial)
- Ao declarar o valor inicial na função reduce:
  - O acumulador inicia com o valor inicial (acumulador = valorInicial)
  - o valor atual inicia na posição [0] do array (valorAtual = Array[0]).
- Não declarar o valor inicial na função reduce:
  - O `acumulador` inicia com o primeiro valor do array `(acumulador = Array[0])`
  - O `valor atual` inicia na posição [1] do array `(valorAtual = Array[1])`.
- (50:00) req2 - Encontre o maior valor no array de numbers
- (1:04:10) req3 - Criar um objeto de array com as seguintes informações. (find + reduce)



# DIA 5

### [SPREAD OPERATOR] [...]
- rep: o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto.
- Incluído no ES6
- Espalha valores de arrays e objetos.
- Ajuda a promover imutabilidade no código
- pode ser utilizado para combinar objetos e arrays
- Pode ser utilizado para copiar valores de objetos iteráveis
- Pode ser utilizado em funções que recebem múltiplos argumentos
- `['string',...array, ...array2]`
- `{...objeto1, ...objeto2, key:value}`
- `Function x (...array) => a + b`

```
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
```

### [PARÂMETRO REST]
- O parâmetro rest é uma feature do ES6
- Permite criar funções com um número variável de argumentos
- Cria funções mais flexíveis
-  `Function x (...rest)`

### [OBJECT DESTRUCTURING]
- `{ propriedade } = objeto` propriedade = value
- `{ propriedade:nomeVariável } = objeto` nomeVariável = value
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

### [ARRAY DESTRUCTURING]
```
const ARRAY = ['value1', 'valor2', '3eulav'];
const [constA, constB, constC] = ARRAY;
--------
Saída:
--------
constA = value1
constb = valor2
constC = value3 inverso 
```
### [DEFAULT DESTRUCTURING]
```
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian
```

### [OBJECT PROPERTY SHORTHAND]
 - Novo em JavaScript com ES6 / ES2015, se você quiser definir um objeto cujas chaves tenham o mesmo nome que as variáveis passadas como propriedades, você pode usar a abreviação e simplesmente passar o nome da chave. 
 - https://alligator.io/js/object-property-shorthand-es6/

- Exemplo com Shorthand::
```
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
```
- Exemplo sem Shorthand:
```
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};
```

### [DEFAULT PARAMETERS]
- o default será utilizado caso nenhum argumento seja fornecido a função.
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Sintaxe:
```
function [nome](param1= valorPredefinido1, ..., paramN = valorPredefinidoN ) {
   instruções
}
```
### [AULA]
- (Início) - Default parameters.
- (00:06:50) - Obj. property shorthands.
- (00:13:40) - Spread
