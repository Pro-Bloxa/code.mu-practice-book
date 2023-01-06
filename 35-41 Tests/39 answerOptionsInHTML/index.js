'use strict';

// В предыдущих уроках ответы на вопросы теста должны были вбиваться в инпуты. В жизни, однако, часто бывают также тексты, в которых можно выбрать один вариант ответа из предложенных.
// Давайте опять начнем с простого варианта, когда вопросы и ответы хранятся в HTML коде, а затем будем постепенно усложнять.
// Дан тест с вариантами ответов. Как вы видите, варианты ответов мы можем выбрать с помощью радио кнопочек. При этом в каждом вопросе радио кнопка с правильным вариантом отмечена атрибутом data-right.

const questions = document.querySelectorAll('p');
const label = Array.from(document.querySelectorAll('label'));
const inputs = Array.from(document.querySelectorAll('input[type="radio"]'));
const btn = document.querySelector('button');

// №1 ⊗jsPrTstHAV
// Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.

// label.forEach(item => {
//     item.addEventListener('click', function() {
//         item.firstElementChild.hasAttribute('data-right') ?
//         item.classList.add('right') :
//         item.classList.add('wrong');
//     });
// });


// №2 ⊗jsPrTstHAV
// Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

btn.addEventListener('click', function() {
    inputs.forEach(item => {
        if(item.checked) {
            item.hasAttribute('data-right') ?
            item.parentElement.classList.add('right') :
            item.parentElement.classList.add('wrong');
        }
    });
});
