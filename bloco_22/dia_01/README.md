# BLOCO 22.1 NODE

# Node
- Surgiu do V8( interpretador Javascript do Chrome)
- o software responsável por interpretar o código dá-se o nome de interpretador, engine, runtime.
- Node é um runtime Jascript...

## Por que usar o Node
- Crescimento.
- Repositório com mais pacotes.
- Performance
    - Leitura/escrita `não bloqueante`.
    - Assincrona `entrada e saída de dados`.
- Aplicação em tempo real.
- Versátil por ser Javascript.

## Sistema de módulos
### Modulos.
- São peaços de códigos.
- pode ser organizado em um ou mais arquivos.
- Funcionalidade ou conjuto delas que se encontram isoladas do restante do código.

### M. Internos.
- inlusos no NODE.
- baixado ao dar o npm.
- fs/url/queryString/util/os.

### M. Locais.
- Módulos contruidos localmente.
- Podem ser publicados.

### M. De terceiros.
- Criados e disponibilizados por outras pessoas pelo NPM.

### Sistema de Módulos difundidos
- ES6 (Não possui suporte padrão)
- CommonJs (nativo)

## Exportando Módulos
- Variável global `module.exports`
- pode exportar qualquer valor válido em JS.
- Exportar uma variável `module.exports = constanteA`
- Exportar diversas variáveis `module.exports = { constanteA, funçãoB }` 
```
// brlValue.js
const brl = 5.03;

module.exports = brl;
```

## Importando Módulo
- Locais: `const meuModulo = require('./meuModulo');`
- Internos: `const fs = require('fs');`
- Terceiros: apos intaldao via NPM é importado igual ao módulo interno.

## NPM
- Node Package Manager.
- Auxilia no gerenciamento de pacotes.
- www.npmjs.com

### NPM INIT
- Inicia pacote node.
- `npm init`
- `npm init -y` (a flag -y inica o arquivo de forma padrão).
- Cria o package.json
- Cria pasta node_modules

### NPM RUN
- executa scripts

### NPM START
- Atalho para npm run start
- package.lock -> scripts -> start:

### NPM INSTALL
- `npm install pacote` adiciona pacote as dependências
- `npm install -d pacote` adiciona pacote as dependências do dev.
- `npm install` instala pacotes do package.json.



