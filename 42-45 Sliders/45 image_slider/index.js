'use strict';

// Давайте теперь сделаем слайдер картинок. Пусть в HTML коде у нас дан тег img
// Пусть также у нас дан массив картинок
// Давайте сделаем так, чтобы каждую секунду в теге img появлялась новая картинка из нашего массива.
// №2⊗jsPrSlIVA
// Модифицируйте предыдущую задачу так, чтобы над картинкой также появились стрелки вперед и назад. То есть слайдер будет сам проматываться таймером, но при желании юзер также сможет промотать его ссылками.

const slider = document.getElementById('slider');
const images = document.querySelectorAll('img');

let i = 0;

let timerInterval = setInterval(function() {
    images[i].style.display = 'none';
    ++i;
    if( i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'inline-block';

}, 2000);

// важно в начале поставить displаy:none всем картинкам, кроме первой. Тогда первая будет показана сразу