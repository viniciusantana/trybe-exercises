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