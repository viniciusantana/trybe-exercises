// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => data.joke)
  .then(joke => addJokeContainer(joke));

};
const addJokeContainer = (string) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerHTML = string;
};

const firstPromise = new Promise((resolve, reject) => {
  let arrayNumeber = [];
  let acc = 0;
  for (let index = 0; index < 10; index++) {
    let randomNumber = Math.floor(Math.random() * (50 - 1)) + 1;
    arrayNumeber.push(randomNumber * randomNumber);
  }
  arrayNumeber.forEach((value) => acc += value);
  acc > 8000 ? reject() : resolve();
})
.then(() => console.log(`Promise resolvida`))
.catch(() => console.log(`Promise Falhou`));

// firstPromise();

window.onload = () => fetchJoke();