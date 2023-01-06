'use strict';

// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. Начнем с самых простых вариантов и будем постепенно усложнять.
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ. Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
// Дан массив правильных ответов и массив вопросов
// №1 ⊗jsPrTstAQA
// Реализуйте поставленную задачу.

const test = document.querySelector('#test');
const btn = document.querySelector('button');

let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];

let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];

questions.forEach(item => {
    test.insertAdjacentHTML('beforeend', `
        <div><p>${item}</p><input></div>
    `);
});

btn.addEventListener('click', function() {
    let arrOfInput = Array.from(test.querySelectorAll('input'));
    console.log(arrOfInput);

    arrOfInput.forEach((item, i) => {
        
        if(item.value === answers[i]) {
            item.classList.add('right');
        } else {
            item.classList.add('wrong');
        }
    });
});
