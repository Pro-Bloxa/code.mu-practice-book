'use strict';

// Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы хотим видеть дату, название и описание события. 
// №1 ⊗jsPrStHS
// Продумайте, как удобнее всего хранить исторические события.
// №2 ⊗jsPrStHS
// Реализуйте описанный сайт.

const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const table = document.querySelector('#table');

let events = {
    '2000': [
        ['12.09.2000', 'название события 2000-1', 'описание события 2000-1'],
        ['10.10.2000', 'название события 2000-2', 'описание события 2000-2'],
        ['02.12.2000', 'название события 2000-3', 'описание события 2000-3'],
        ],
    '2001': [
        ['12.09.2001', 'название события 2001-1', 'описание события 2001-1'],
        ['10.10.2001', 'название события 2001-2', 'описание события 2001-2'],
        ['02.12.2001', 'название события 2001-3', 'описание события 2001-3'],
        ],
    '2002': [
        ['12.09.2002', 'название события 2002-1', 'описание события 2002-1'],
        ['10.10.2002', 'название события 2002-2', 'описание события 2002-2'],
        ['02.12.2002', 'название события 2002-3', 'описание события 2002-3'],
        ],
};

let keys = Object.keys(events);

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        let search = input.value;
        if(search !== '' && keys.includes(search)) {
            removeTable();
            createTable(search);
        } else if(!keys.includes(search)) {
            alert('Этого года нет в базе, введите другой');
            removeTable();
        }
    }
});

function createTable(search) {
    let arr = events[search];
    console.log(arr);
    for(let event of arr) {
        let tr = document.createElement('tr');
        for(let i = 0; i < event.length; i++) {
            let td = document.createElement('td');
            td.textContent = event[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function removeTable() {
    let trs = document.querySelectorAll('tr');
    for(let tr of trs) {
        table.removeChild(tr);
    }
}
