'use strict';

// Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться не по таймеру, а по нажатию на стрелку.
// Основная тонкость решения этого слайдера в том, что переменная-счетчик текстов должна быть общей для обработчиков кликов наших стрелок
// А вторая тонкость в том, что как при уменьшении i, так и при увеличении, нельзя выйти в числа меньше нуля и больше последнего элемента массива.
// №1⊗jsPrSlTWA
// Реализуйте описанный слайдер. Сделайте так, чтобы тексты ходили по кругу.

let texts = ['text1', 'text2', 'text3'];

let left = document.getElementById('left');
let right = document.getElementById('right');
const slider = document.getElementById('slider');

let i = 0;

left.addEventListener('click', function(e) {
    e.preventDefault();
    slider.textContent = texts[i];
    --i;
    if(i < 0) {
        i = texts.length - 1;
    }
});

right.addEventListener('click', function(e) {
    e.preventDefault();
    slider.textContent = texts[i];
    ++i;
    if(i >= texts.length) {
        i = 0;
    }
});
