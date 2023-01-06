'use strict';

// Пусть теперь вопросы, варианты ответов и номера правильных ответов хранятся в одном объекте
// Теперь по заходу на страницу вам придется перебрать циклом наш объект и сформировать HTML код вопросов.

let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];



let test = document.querySelector('#test');
let btn = document.querySelector('button');

let block = (() => {
    for (let i = 0; i < questions.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerHTML = questions[i].text;
        test.append(div);
        div.append(p);
        for (let j = 0; j < questions[i].variants.length; j++) {
            let radio = document.createElement('input');
            let label = document.createElement('label');
            label.innerHTML = questions[i].variants[j];
            radio.type = 'radio';
            radio.name = i + 1;
            label.prepend(radio);
            div.append(label);

        }
    }
})();

btn.addEventListener('click', () => {
    let blocks = document.querySelectorAll('#test div');

    for (let i = 0; i < blocks.length; i++) {
        let radios = blocks[i].querySelectorAll('input[type="radio"]');
        
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                let label = radios[j].parentElement;
                console.log(label);
                for (let k = 0; k < questions.length; k++) {
                    if (j == questions[i].right) {
                        label.classList.add('right');
                    } else {
                        label.classList.add('wrong');
                    }

                }
            }
        }
    }
});

// ниже мой вариант. не смогла создать необходимую разметку в JS
// const test = document.querySelector('#test');
// const btn = document.querySelector('button');
// let keys = [], variants = [], rights = [];

// questions.forEach(elem => {
//     keys.push(elem.text);
//     variants.push(elem.variants);
//     rights.push(elem.right);
// });

// keys.forEach(item => {
//     test.insertAdjacentHTML('beforeend', `
//         <div><p>${item}</p></div>
//     `);
// });

// let blocks = Array.from(test.querySelectorAll('div'));

// ошибка в блоке ниже: правильная разметка не получается
// blocks.forEach(block => {

//     for (let i = 0; i < questions.length; i++) {

//         for (let j = 0; j < questions[i].variants.length; j++) {
//             let radio = document.createElement('input');
//             let label = document.createElement('label');
//             label.innerHTML = questions[i].variants[j];
//             radio.type = 'radio';
//             radio.name = i + 1;
//             label.prepend(radio);
//             block.append(label);

//         }
//     }
// });

