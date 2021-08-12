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
}


window.onload = () => fetchJoke();