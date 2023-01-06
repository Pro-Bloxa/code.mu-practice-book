'use strict';

// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. Начнем с самых простых вариантов и будем постепенно усложнять.
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ. Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
// Дан объект правильных ответов вопросов

const test = document.querySelector('#test');
const btn = document.querySelector('button');

// №1 ⊗jsPrTstOQA
// Пусть вопросы и ответы хранятся в таком объекте:
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// };

// let keys = Object.keys(questions);
// console.log(keys);

// keys.forEach(item => {
//     test.insertAdjacentHTML('beforeend', `
//         <div><p>${item}</p><input></div>
//     `);
// });

// btn.addEventListener('click', function() {
//     let arrOfInput = Array.from(test.querySelectorAll('input'));
//     console.log(arrOfInput);

//     arrOfInput.forEach((item, i) => {
//         if(item.value === questions[keys[i]]) {
//             item.classList.add('right');
//         } else {
//             item.classList.add('wrong');
//         }
//     });
// });

// №2 ⊗jsPrTstOQA
// Пусть вопросы и ответы хранятся в таком объекте:
let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];

let keys = [];

for(let i = 0; i < questions.length; i++) {
    keys.push(questions[i].text);
}
console.log(keys);

keys.forEach(item => {
    test.insertAdjacentHTML('beforeend', `
        <div><p>${item}</p><input></div>
    `);
});

btn.addEventListener('click', function() {
    let arrOfInput = Array.from(test.querySelectorAll('input'));
    console.log(arrOfInput);

    arrOfInput.forEach((item, i) => {
        if(item.value === questions[i].right) {
            item.classList.add('right');
        } else {
            item.classList.add('wrong');
        }
    });
});