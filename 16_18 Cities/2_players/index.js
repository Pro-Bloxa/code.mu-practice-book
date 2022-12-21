'use strict';

// Пусть играют два человека за одним компьютером. Ходят по очереди. Города вводятся в один инпут и отправляются по нажатию клавиши Enter. Браузер должен запоминать города, которые уже были, и не принимать такие города.
// У нас будет инпут для ввода городов и див для вывода сообщений со стороны браузера
// №1 ⊗jsPrStTbs


let field   = document.querySelector('#field');
let message = document.querySelector('#message');

let cities = [];
let prohibitedChars = ['ы', 'ъ', 'ь'];

field.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && cities.length === 0) {
        let value = field.value.toLowerCase().trim();
        console.log('value: ' + value);
        cities.push(value);
        message.textContent = 'Верно! Следующий игрок';
        field.value = '';
    } else if(event.key === 'Enter' && cities.length !== 0) {
        let value = field.value.toLowerCase().trim();
        checkAll(value, cities);
    }
});

function compareLetters(city, arr) {
    let fierstLetter = city.toLowerCase().trim().slice(0, 1);
    console.log('fierstLetter: ' + fierstLetter);

    let lastLatter = arr[arr.length - 1].slice(-1).toLowerCase();
    console.log('lastLatter1: ' + lastLatter);

    for(let char of prohibitedChars) {
        if(lastLatter === char) {
            lastLatter = arr[arr.length - 1].slice(-2, -1).toLowerCase();
            console.log('lastLatter2: ' + lastLatter);
        }
    }

    if(fierstLetter !== lastLatter) {
        return false;
    }
    return true;
}

function checkCity(city, arr) {
    return arr.find(item => item === city.trim().toLowerCase());
}

function checkAll(city, arr) {
    if(compareLetters(city, arr) && !checkCity(city, arr)) {
        cities.push(city);
        message.textContent = 'Верно! Следующий игрок';
        field.value = '';
    } else if(compareLetters(city, arr) && checkCity(city, arr)) {
        message.textContent = 'Такой город уже вводили';
        field.value = '';
    } else if(!compareLetters(city, arr) && !checkCity(city, arr)) {
        message.textContent = `Ошибка! Название города (${field.value}) не с той буквы`;
        field.value = '';
    }
}