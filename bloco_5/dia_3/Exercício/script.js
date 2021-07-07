function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDayList() {
    const ulDays = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dias = dezDaysList[index];
        let listaDias = document.createElement('li');
        listaDias.innerHTML = dias;
        listaDias.classList.add('day')
        if (dias === 24 || dias === 25 || dias === 31) {
            listaDias.classList.add('holiday');
        }
        if (dias === 4 || dias === 11 || dias === 18 || dias === 25) {
            listaDias.classList.add('friday');
        }
        ulDays.appendChild(listaDias);
    }
}
createDayList();

/*
2.Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
let buttonsContainer = document.querySelector('.buttons-container');
function createHolidayButton(feriado) {
    let buttons = document.createElement('button');
    buttons.id = 'btn-holiday';
    buttons.innerHTML = feriado;

    buttonsContainer.appendChild(buttons);
}
createHolidayButton('Feriados');

/*
 Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de
fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. 
Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

const HolidayButton = document.getElementById('btn-holiday');
const holidays = document.getElementsByClassName('holiday');

HolidayButton.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.background === 'blue' ) {
            holidays[index].style.background = 'none';
        }else{
            holidays[index].style.background = 'blue';
        }
    }
})

/*
4.Implemente uma função que receba como parâmetro a string "Sexta-feira" e 
crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function buttonFriday(nomeBotao){
    createButtonFriday = document.createElement('button');
    createButtonFriday.id = 'btn-friday';
    createButtonFriday.innerHTML = nomeBotao
    buttonsContainer.appendChild(createButtonFriday);
}
buttonFriday ('Sexta-Feira');

/*
5.Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" 
que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa.
Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

const fridayButton = document.getElementById('btn-friday');
const fridays = document.getElementsByClassName('friday');
fridayButton.addEventListener('click', function(){
    for(let index = 0; index < fridays.length; index += 1) {
        if(fridays[index].innerHTML === 'Sextou'){
            fridays[index].innerHTML = index * 7 + 4;
        }else {
            fridays[index].innerHTML = 'Sextou';
        }
    }
})

/*
 6.Implemente duas funções que criem um efeito de "zoom". 
 Ao passar o ponteiro do mouse em um dia do mês no calendário, 
 o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia,
 o texto deve retornar ao tamanho original. 
*/
const days = document.querySelectorAll('.day');

for(let index = 0; index < days.length; index += 1){
    days[index].addEventListener('mouseover', Zoom);
    days[index].addEventListener('mouseout', noZoom);
    //console.log(days[index]);
}


function Zoom(event){
    event.target.style.color = 'blue';
    event.target.style.fontSize = '25px';
}
function noZoom(event){
    event.target.style.color = '';
    event.target.style.fontSize = '';
}

/*
 7.Implemente uma função que adiciona uma tarefa personalizada ao calendário.
 A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar")
 e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
 O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe
 "my-tasks".
*/

function tarefas (tarefaString) {
    let spanTarefa = document.createElement('span');
    spanTarefa.innerHTML = tarefaString;
    let myTask = document.querySelector('.my-tasks');
    myTask.appendChild(spanTarefa);
}
tarefas('Estudar');

