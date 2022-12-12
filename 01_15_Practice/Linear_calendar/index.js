'use strict';

// №1 ⊗jsPrStLC
// Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
// №2 ⊗jsPrStLC
// Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
// №3 ⊗jsPrStLC
// Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.
// №4 ⊗jsPrStLC
// Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц. Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const month = document.querySelector('.month span');
const year = document.querySelector('.year span');
const box = document.querySelector('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let now = new Date()
let currentDay = now.getDate();

btn.addEventListener('click', function(){
    createCalendar(now);
    box.classList.remove('box');
    getMonth(months[now.getMonth()]);
    getYear(now.getFullYear());
});

function getYear(y) {
    year.textContent = y;
}

function getMonth(m) {
    month.textContent = m;
}

function createCalendar(days) {
    let firstDay  = (new Date(days.getFullYear(), days.getMonth(), 1).getDate());
    let lastDay  = (new Date(days.getFullYear(), days.getMonth() + 1, 0).getDate());
    let arrOfDays = [];

    for(let i = firstDay; i <= lastDay; i++) {
        arrOfDays.push(i);
    }
    for(let day of arrOfDays) {
        let elemLi = document.createElement('li');
        elemLi.textContent = day;
        list.appendChild(elemLi);
        if(day === currentDay) {
            elemLi.classList.add('active');
        }
    }
}

function removeList() {
    let ul = document.querySelectorAll('.list li');
    for (let li of ul) {
        list.removeChild(li);
    }
}

prev.addEventListener('click', function(e) {
    removeList();
    let indexCurrentMonth;
    let newDate;
    if(month.textContent === months[0]) {
        year.textContent = (+year.textContent - 1);
        month.textContent = months[11];
        newDate = new Date(year.textContent, 11);
    } else {
        indexCurrentMonth = months.indexOf(month.textContent);
        month.textContent = months[indexCurrentMonth - 1];
        newDate = new Date(year.textContent, indexCurrentMonth-1);
    }
    createCalendar(newDate);

});

next.addEventListener('click', function(e) {
    removeList();
    let indexCurrentMonth;
    let newDate;
    if(month.textContent === months[11]) {
        year.textContent = (+year.textContent + 1);
        month.textContent = months[0];
        newDate = new Date(year.textContent, 0);
    } else {
        indexCurrentMonth = months.indexOf(month.textContent);
        month.textContent = months[indexCurrentMonth + 1];
        newDate = new Date(year.textContent, indexCurrentMonth+1);
    }
    createCalendar(newDate);
});
