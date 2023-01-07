'use strict';

// Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться не по таймеру, а по нажатию на стрелку.
// Основная тонкость решения этого слайдера в том, что переменная-счетчик текстов должна быть общей для обработчиков кликов наших стрелок
// А вторая тонкость в том, что как при уменьшении i, так и при увеличении, нельзя выйти в числа меньше нуля и больше последнего элемента массива.
// №2⊗jsPrSlTWA
// Модифицируйте предыдущую задачу так, чтобы тексты не ходили по кругу, а просто не прокручивались дальше по достижению крайнего правого или левого положения.

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
        i = 0;
    }
});

right.addEventListener('click', function(e) {
    e.preventDefault();
    slider.textContent = texts[i];
    ++i;
    if(i >= texts.length) {
        i = texts.length - 1;
    }
});
