'use strict';

// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. Начнем с самых простых вариантов и будем постепенно усложнять.
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ. Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
// Следующий нюанс, который следует продумать: в какой момент мы будем выполнять проверку ответов на правильность? Здесь можно предложить два варианта: либо пусть каждый инпут сразу же по вводу в него ответа проверяет правильный ли этот ответ, либо пусть будет кнопка, по нажатию на которую будут проверены ответы на все вопросы сразу.
// Какой бы из вариантов мы не выбрали, давайте, если ответ правильный, то границу инпута будем красить в зеленый цвет, а если неправильный - в красный. 

const questions = Array.from(document.querySelectorAll('p'));
const inputAnswers = Array.from(document.querySelectorAll('input'));

// №1 ⊗jsPrTstHQA
// Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. Пусть в этом случае инпут сразу проверяет ответ на правильность.

// inputAnswers.forEach(item => {
//     item.addEventListener('keyup', function(event) {
        
//         if(event.key === "Enter") {
//             console.log(this.value);
//             if(this.value === this.dataset.right) {
//                 this.classList.add('right');
//             } else {
//                 this.classList.add('wrong');
//             }
//         }
//     });
// });


// №2 ⊗jsPrTstHQA
// Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    inputAnswers.forEach((item, i) => {
        console.log(item.value, item.dataset.right);
        if(item.value === item.dataset.right) {
            item.classList.add('right');
        } else {
            item.classList.add('wrong');
        }
    });
});
