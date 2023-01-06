'use strict';

// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. Начнем с самых простых вариантов и будем постепенно усложнять.
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ. Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
// Дан массив правильных ответов
// №1 ⊗jsPrTstQIA
// Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.

const questions = Array.from(document.querySelectorAll('p'));
const inputAnswers = Array.from(document.querySelectorAll('input'));
const btn = document.querySelector('button');

let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];

btn.addEventListener('click', function() {
    inputAnswers.forEach((item, i) => {
        console.log(item.value, i);
        if(item.value === answers[i]) {
            item.classList.add('right');
        } else {
            item.classList.add('wrong');
        }
    });
});
