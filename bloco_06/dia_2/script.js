const submited = document.getElementById('submit');
const state = document.getElementById('estado');
function stateCreate(){
  const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO',
  'MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS',
  'RO','RR','SC','SP','SE','TO'];
  for(let index = 0; index < states.length; index += 1){
      let newState = document.createElement('option');
      newState.value = states[index];
      newState.innerText = states[index];
      state.appendChild(newState);
  }
}
//stateCreate();

function lengthTest(inputName, maxLenght){
  const input = inputName;
  const name = document.querySelector(`[name=${input}]`);
  if(name.value.length > maxLenght || name.value.length === 0 ) {
      //alert(`${input} inválido`);
      name.style.border = '2px solid red';
      name.style.transition = 'all 4s';
      name.placeholder ='Campo obrigatório'
      outputForm();
  }
} 
// Em construção:
function outputForm(){
  const createDiv = document.createElement('div');
  createDiv.innerText = 'Erro'
  const mainContent = document.getElementById('main-content');
  mainContent.appendChild(createDiv);  
}

submited.addEventListener('click', function(event) {
  event.preventDefault();
  lengthTest('nome', 40);
  lengthTest('email', 50);
  lengthTest('cpf', 11);
  lengthTest('endereco', 200);
  lengthTest('cidade', 28);
  //tipo(tipo de residência)
  lengthTest('curriculo', 1000);
  lengthTest('descricao-cargo', 500);
  lengthTest('descricao-cargo', 500);
  //data de inicio
})
