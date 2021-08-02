# BLOCO 8:

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
- A função pode demorar 1 milissegundo ou 1 minuto para ser executada. 
- https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

### [Aula+]
- Função é um tipo de dado como qualquer outro.
- Função .call() chama a função `function(x) === function.call(x)`
- `.call` é um [syntactic sugar] pesquisar.

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
- `Array.forEach` => itera sobre todos os elementos de um array;
- `Array.find` => encontrar o primeiro elemento de um array que satisfaça a uma condição;
- `Array.some` e `Array.every` => testar os elementos de um array satisfazem a uma condição;
- `Array.sort` => ordena arrays de acordo com algum critério.


### [Array.forEach] 
- Para cada-faça
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
### [ARRAY.FIND] se-encontrar
- É utilizada para achar o primeiro elemento que satisfaça a condição passada.
- a função(callback) que deverá ser passada precisa retornar true ou false.
- A Callback function recebe como parâmetro (valor/element, indice(opcional), array(opcional)).
- Se não encontrar nenhum elemnto a função Find retorna Null/undefined
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
```
Array = [19, 21, 30, 3, 45, 22, 15];
Array.find(((element) => element % 2 === 0) = 30
```

### [ARRAY.SOME] -se-Algum
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
- array.reduce(callback( acumulador, valorAtual, index atual, array org), valorInicial))
- A função Callback recebe 4 parâmetros:
    - Acumulador (acc)
    - Valor Atual (cur)
    - Index Atual (idx)
    - Array original (src)

- (vídeo) - https://www.youtube.com/watch?v=O_bSjsLga48

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
array1.reduce(reducer) // retorno: ( 1 + 2 + 3 + 4 ) = 10.
array1.reduce(reducer, 5) // retorno: (5 + 1 + 2 + 3 + 4) = 15.
```

