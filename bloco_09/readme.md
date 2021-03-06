# Bloco 9
![img](https://i.imgur.com/R36tQO0.png)
# [DIA 1](https://github.com/tryber/sd-014-b-live-lectures/tree/lecture/9.1)
## [OPERAÇÕES ASSINCRONAS]
- Operações Síncronas
    - Conjunto de operações que dependem do término da execução de operações anteriores para começar sua execução.
    - A ordem de execução não pode ser quebrada pois uma operação afeta diretamente a outra.
    - São bloqueantes - Cada comando espera o outro concluir para poder executar.
- Operações Assíncronas
    - Em uma requisição assíncrona, não existe sincronismo entre as requisições, sendo assim, podemos enviar diversas requisições em paralelo, onde cada resposta retorna quando estiver pronta.
    - São operações que não travam o fluxo de execução, podendo ser executadas em paralelo.
    - [(Vídeo 4min) O que é código assíncrono?](https://www.youtube.com/watch?v=tVYTqsqZHZY)
    - [Artigo](https://giuliana-bezerra.medium.com/operacoes-assincronas-javascript-promises-ae7553ad62b8)
    - [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous)
    - [Conceitos gerais de programação assíncrona](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts)
- setTimeOut(`função`, `tempo-em-milissegundos`)
    - Função assíncrona
    - Executa um bloco de código uma vez depois de um determinado tempo
    - [Timeouts e intervalos/MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
## [CALLBACKS]
- Uma função callback é uma função passada a outra função como argumento.
- Na programação assíncrona, callbacks são passadas como funções para serem executadas após um certo evento
- [DOCUMENTAÇÃO](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)
- [(ARTIGO)ENTENDENDO FUNÇÕES CALLBACK](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)

## [FETCH API]
[FETCH]
- [(Vídeo 3min)Como fazer requisições HTTP com o método fetch](https://www.youtube.com/watch?v=m3K8DP4kVXQ)
- fetch() é a função primária da Fetch API
- A função fetch() é uma função assíncrona baseada em uma promise e é utilizada para fazer chamadas às URLs das APIs
- fetch() recebe como parametro URL da API e um Objeto com as informações sobre a requisição.
- A função fetch() ainda pode ser chamada recebendo apenas a URL do serviço da API
``` 
fetch(URL) // PROMISE
    .then((resposta) => (resposta.json())) // Todos os dados da requisição - response
    .then((dados) => {console.log(dados.chave)}) // Dados em Json/objeto(chave: valor)
```

[API]
- [O que são APIs/MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- API é uma forma de trafegar dados entre aplicações  
- API é uma interface que está entre duas aplicações, possibilitando a comunicação entre elas através de requisições.

[AULA/EXTRA]
- https://github.com/public-apis/public-apis
- pokeapi.co
- Extensão para chrome JSON viewer. Firefox não precisa.

[??????] 
- [(Vídeo)JS Assíncrono: Entenda de vez Callbacks, Promises e Async/Await](https://www.youtube.com/watch?v=7Bs4-rqbCQc)
- [(Vídeo)Uma forma moderna de fazer requisições HTTP escrevendo menos (fetch, promises)](https://www.youtube.com/watch?v=BCSPrwu5aTo)
- [(Vídeo)Promises - Uma introdução prática e compreensiva](https://www.youtube.com/watch?v=wTGPhsGJ0sw)
- [(Vídeo)Como usar o método map para inserir informações na tela](https://www.youtube.com/watch?v=oQimi85ey_4)
- [Event Loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
- [(Vídeo)Aplicação com JavaScript puro: Como desenvolver uma pokedex ](https://www.youtube.com/watch?v=Uptu3NrBFBM)
- [(Vídeo)Como JavaScript FUNCIONA? (recomendado por Riba Jr)](https://www.youtube.com/watch?v=gb7FDfvHlGg)


# [DIA 2](https://github.com/tryber/sd-014-b-live-lectures/tree/lecture/9.2)
## [APLICATION PROGRAMMING INTERFACE API]
- Uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas.
- APIs retornam dados em reposta(response) a uma requisição (request) do cliente.
- Toda API é um back-end, mas nem todo back-end é uma API.
- Geralmente retornam dados no formato JSON . 
- JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos
## [RELEMBRANDO O FLUXO ASSÍNCRONO]
- Quando o javascript lê uma função assíncrona, ela é enviada para uma área especial, e a fila síncrona continua correndo.
- Quando a função assíncrona termina sua execução, ela volta para a fila novamente para "entregar a resposta" de sua execução.
- A área especial das assíncronas não é muito ordenada (a primeira que entra não é, necessariamente, a primeira que sair)
- [Requisições sincronas e assíncronas](http://www.diogomatheus.com.br/blog/php/requisicoes-sincronas-e-assincronas/)
## [PROMISES]
- [Usando promises/mdn](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [Promise.all](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- É uma estrutura que representa uma eventual falha ou sucesso de uma chamada assíncrona.
- A promise é do tipo Objeto.
- As Promises têm  funções extras que facilitam o controle do fluxo assíncrono.
- Para criar uma nova Promise, usamos um Construtor:
- [CONSTRUTOR]
    - Para criar a Promise, utilizamos o construtor Promise junto com o operador new.
    - Construtor é uma função especial que cria um objeto a partir de uma classe.
    - O construtor recebe uma função com 2 parâmetros: resolve e reject 
    ```
    const promise = new Promise((resolve, reject) => {

    });
    ```
- [Estados da promise]
    - A promise tem 3 estados. `Pending` , `Fulfilled` e `Rejected`.
    - Ao executar ela entra automáticamente no estado Pending.
    - Retorna Fulfilled, se ocorreu tudo certo com sua execução.
    - Retorna Rejected, se ocorreu algum erro.
    - a Promise tem o resolve e o reject que retornam uma resposta de sua execução(se fulfilled ou rejected).
    - O `resolve` retorna a resposta positiva da promise.
    - o `reject` retorna a resposta negativa da promise.
- [Gestores de fluxo]
    - Os principais gestores são o `.then()` e o `.catch()`.
    - O .then() recebe o retorno de resolve.
    - O .then() é usado "em cadeia", um conceito chamado de chaining, podendo receber o retorno de outro then.
    - o .catch() recebe o retorno do reject.
    - O .catch() também "pega" qualquer erro que acontecer dentro do .then().
- [Fetch API]
    - é responsável por enviar requisições a APIs
    - Possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.
- Instalar o package.json e o node-fetch
```
npm init -y
npm i node-fetch
```
- [(Vídeo 5min)Async/await: o que é e como funciona | JavaScript](https://www.youtube.com/watch?v=Zl_jF7umgcs)

- Async
    - Transforma qualquer função em uma promise.
    - Para usá-la, basta colocar o async antes da definição da função.
    - ??Ao converter uma função em uma promise, o que é resolve vira return e o que é reject vira throw.
- Await
    - O await só pode ser usado dentro de uma função com async
    - Faz com o que a função espere uma resposta para continuar sua execução.
- Try{} catch(error){}.
    - Bloco try/catch serve para tratamento de exceções, tratamento de códigos que podem não ser totalmente atendidos e gerarem alguma exceção/erro.
    - O try consegue recuperar erros que possam ocorrer no código fornecido em seu bloco.
    - O catch por sua vez faz o tratamento dos erros que aconteceram.
    - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
    - [(stack)Para que servem os Blocos Try/Catch e quando devem ser utilizados?](https://pt.stackoverflow.com/questions/58536/para-que-servem-os-blocos-try-catch-e-quando-devem-ser-utilizados)
    - [try…catch - Tratando erros no JavaScript](https://ricardo-reis.medium.com/try-catch-tratando-erros-no-javascript-91bcce0b93ae)


### [P/R]
- O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

- Quando você tem que enfileirar várias callbacks , que problema surge?

- Por que as Promises são uma forma de se resolver esse problema?

- Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

- Dada a resposta anterior, o que é fetch e para que ele serve?

-------
## [Bloco de notas]
### [Instanciar nova promise Ex-gab]
```
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {

  });
};
```
```
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {

  });

  myPromise
    .then()
    .catch();
};
fetchPromise();
```

### ARRAY.FROM
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
- https://www.youtube.com/watch?v=5fiCq2F4CTo
- array.from(array, array.map) XXX ({0: array[0], 1: array[1], length: X}, ()=>())
- Array com tamanho 10 e números aleatórios:
```
const arrayAleatorio = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
);
```
```
LOG:
 [
    37, 17, 20, 25, 38,
     1, 48, 24,  4, 34
 ]
```
- Teste sem definir função:
```

const arrayUndefined = Array.from(
    { length: 10 }
);
```
```
LOG:
[
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined
] 
```
- outro
```
const arrayUndefined = Array.from(
    { 0: 1, 1:2, 2:3,  length: 3 },
    (x) => (x)
);
**LOG: [ 1, 2, 3 ]
```
- manipular os elementos do array
```
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]
```
-------
- async-try-catch
```
async function nomeFunc() {
    try {
      const nomeConst = await Promise.all([
        fetch(url).then((response) => response.json()),
      ]);
    } catch (error) {
      alert('erro!');
    }
}
```