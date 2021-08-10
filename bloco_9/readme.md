# Bloco 9
# DIA 1
## [OPERAÇÕES ASSINCRONAS]
- Operações Síncronas
    - Conjunto de operações que dependem do término da execução de operações anteriores para começar sua execução.
    - A ordem de execução não pode ser quebrada pois uma operação afeta diretamente a outra.
    - Cada comando espera o outro concluir para poder executar (bloqueante)
- Operações Assíncronas
    - [(Vídeo) O que é código assíncrono?](https://www.youtube.com/watch?v=tVYTqsqZHZY)
    - [Artigo](https://giuliana-bezerra.medium.com/operacoes-assincronas-javascript-promises-ae7553ad62b8)
    - [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous)
    - [Conceitos gerais de programação assíncrona](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts)
    - Não travam o fluxo de execução, podendo ser executadas em paralelo.
- setTimeOut(função, tempo-em-milissegundos)
    - Função assíncrona
    - Executa um bloco de código uma vez depois de um determinado tempo
    - [Timeouts e intervalos/MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
## [CALLBACKS]
- Uma função callback é uma função passada a outra função como argumento
- [DOCUMENTAÇÃO](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)
- [(ARTIGO)ENTENDENDO FUNÇÕES CALLBACK](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)
## [ERROS EM OPERAÇÕES ASSINCRONAS]
- 
- 

## [FETCH API]
[FETCH]
- [(Vídeo 3min)Como fazer requisições HTTP com o método fetch](https://www.youtube.com/watch?v=m3K8DP4kVXQ)
- fetch() é a função primária da Fetch API
- A função fetch() é uma função assíncrona baseada em uma promise e é utilizada para fazer chamadas às URLs das APIs
- fetch() recebe como parametro URL da API e um Objeto com as informações sobre a requisição.
- A função fetch() ainda pode ser chamada recebendo apenas a URL do serviço da API
``` 
fetch(URL) // PROMISE
    .then((resposta) => (resposta.json())) // Todos os dados da requisição
    .then((dados) => {console.log(dados.chave)}) // Dados em Json/objeto(chave: valor)
```

[API]
- [O que são APIs/MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- API é uma forma de trafegar dados entre aplicações  
- API é uma interface que está entre duas aplicações, possibilitando a comunicação entre elas através de requisições.
- pokeapi.co

[??????] 
- [(Vídeo)Como usar o método map para inserir informações na tela](https://www.youtube.com/watch?v=oQimi85ey_4)
- [(Vídeo)Uma forma moderna de fazer requisições HTTP escrevendo menos (fetch, promises)](https://www.youtube.com/watch?v=BCSPrwu5aTo)
- [(Vídeo)JS Assíncrono: Entenda de vez Callbacks, Promises e Async/Await](https://www.youtube.com/watch?v=7Bs4-rqbCQc)
- [(Vídeo)Promises - Uma introdução prática e compreensiva](https://www.youtube.com/watch?v=wTGPhsGJ0sw)


# DIA 2
## [APLICATION PROGRAMMING INTERFACE]
## [RELEMBRANDO O FLUXO ASSÍNCRONO]
## [PROMISES]
