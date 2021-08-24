/* 
4 - O código abaixo busca no GitHub de um usuário, 
de acordo com a URL, seus repositórios, e retorna uma lista 
como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , 
faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e
'sd-01-week4-5-project-meme-generator' se encontram nessa lista.  */

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// getRepos('https://api.github.com/orgs/tryber/repos').then((value) => (console.log(value)));


test('sd-01-week4-5-project-todo-list encontra-se na lista',  async () => {
  expect.assertions(1);
  const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
  const todoList = repos.some((todo) => (todo === 'sd-01-week4-5-project-todo-list'));
  expect(todoList).toBeTruthy();
})

test('sd-01-week4-5-project-meme-generator se encontra nessa lista.' ,  async () => {
  expect.assertions(1);
  const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
  const memeList = repos.some((meme) => (meme === 'sd-01-week4-5-project-meme-generator'));
  expect(memeList).toBeTruthy();
})