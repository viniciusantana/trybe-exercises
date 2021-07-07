const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
//2
/*
secondDiv.addEventListener('click', trocaClasseTech2)
function trocaClasseTech2 (){
  secondDiv.className = 'tech';
  firstDiv.className = '';
  thirdDiv.className = '';
}

firstDiv.addEventListener('click', function (){
  firstDiv.className = 'tech';
  secondDiv.className = '';
  thirdDiv.classList.remove('tech');
})

thirdDiv.addEventListener('click', function (){
  firstDiv.className = '';
  secondDiv.className = '';
  thirdDiv.className = 'tech';
})
*/
function addClass(event){
  let tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  event.target.classList.add('tech');
}
firstDiv.addEventListener('click', addClass);
secondDiv.addEventListener('click', addClass);
thirdDiv.addEventListener('click', addClass);
//3
function techText (){
  let tech = document.querySelector('.tech');
  tech.innerText = input.value;
}
input.addEventListener('keyup', techText);
//4

function doubleClick (){
  window.open('https://codepen.io/johnatas-henrique/pen/jOEQQvZ');
}
myWebpage.addEventListener('dblclick', doubleClick);
//5
function changeColor(){
  myWebpage.style.color = 'yellow'
}
myWebpage.addEventListener('mouseout', changeColor);
myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = 'blue';
});



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.