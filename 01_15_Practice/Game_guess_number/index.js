'use strict';

// №1 ⊗jsPrStGGN
// Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
//Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#btn1');
let result1 = document.querySelector('#result1');

let number = Math.floor(Math.random()*100);
console.log(number);

button1.addEventListener('click', function() {

    if(+input1.value < number) {
        result1.textContent = 'Введите число побольше';
    } else if(+input1.value > number) {
        result1.textContent = 'Введите число поменьше';
    } else if (+input1.value === number) {
        result1.textContent = 'Вы угадали!!!';
    }
});
