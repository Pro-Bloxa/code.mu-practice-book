'use strict';

// №1 ⊗jsPrStGGC
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

let table1 = document.querySelector('#table1');
let result1 = document.querySelector('#result1');
let tds1 = document.querySelectorAll('#table1 td');

let arrCells = [];
let counter = 0;

for(let i = 0; i <= tds1.length; i++) {
    let num = Math.floor(Math.random() * tds1.length);
    if(!arrCells.includes(tds1[num])){
        arrCells.push(tds1[num]);
        if(arrCells.length === 10) break;
    }
}

table1.addEventListener('click', function(event) {
    let cell = event.target.closest('td');
    if(cell === null || cell === undefined) {
        return result1.textContent;
    }
    if(arrCells.includes(cell) && counter !==11) {
        let i = arrCells.indexOf(cell);
        arrCells.splice(i, 1);
        counter++;
        cell.classList.add('active');
        result1.textContent = 'Вы угадали ячейку ' + counter;
        if(counter === 10) {
            result1.textContent = 'Вы угадали 10 ячеек';
            alert('Вы победили!');
        }
    } else {
        cell.textContent = 'X';
    }
});

// №2 ⊗jsPrStGGC
// Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.
let table2 = document.querySelector('#table2');
let result2 = document.querySelector('#result2');
let tds2 = document.querySelectorAll('#table2 td');
let timer = document.querySelector('#timer');
let arrCells2 = [];
let counter2 = 0;

for(let i = 0; i <= tds2.length; i++) {
    let num = Math.floor(Math.random() * tds2.length);
    if(!arrCells2.includes(tds2[num])){
        arrCells2.push(tds2[num]);
        if(arrCells2.length === 10) break;
    }
}

table2.addEventListener('click', function startGame(event) {
    let cell = event.target.closest('td');
    if(cell === null || cell === undefined) {
        return result1.textContent;
    }
    let timerId = +timer.textContent;

    let timerInterval = setInterval(function() {
        timerId--;
        timer.textContent = timerId;
        if(timerId === 0) {
            clearInterval(timerInterval);
            table2.removeEventListener('click', startGame);
            result2.textContent = 'Вы не успели. Попробуйте еще раз';
        }
        if(counter2 === 10) {
            clearInterval(timerInterval);
            timer.textContent = "Победа";
        }
    }, 1000);

    if(arrCells2.includes(event.target) && counter2 !==11) {
        let i = arrCells2.indexOf(cell);
        arrCells2.splice(i, 1);
        counter2++;
        cell.classList.add('active');
        result2.textContent = 'Вы угадали ячейку ' + counter2;
        if(counter2 === 10) {
            result2.textContent = 'Вы угадали 10 ячеек';
            table2.removeEventListener('click', startGame);
        }
    } else {
        cell.textContent = 'X';
    }
});
