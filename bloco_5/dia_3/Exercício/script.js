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

/*2.  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

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

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
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
 Implemente uma função que receba como parâmetro a string "Sexta-feira" e 
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