'use strict';

// Давайте теперь сделаем слайдер картинок. Пусть в HTML коде у нас дан тег img
// Пусть также у нас дан массив картинок
// Давайте сделаем так, чтобы каждую секунду в теге img появлялась новая картинка из нашего массива.
// №2⊗jsPrSlIVA
// Модифицируйте предыдущую задачу так, чтобы над картинкой также появились стрелки вперед и назад. То есть слайдер будет сам проматываться таймером, но при желании юзер также сможет промотать его ссылками.

let texts = ['https://stihi.ru/pics/2020/01/02/4528.jpg', 'http://ckro.baranovichi.edu.by/be/sm.aspx?guid=56663', 'https://avatars.dzeninfra.ru/get-zen-logos/1640044/pub_6241af4e4003be10c5e31deb_6265217a0105543231d14370/xxh', 'https://sun9-36.userapi.com/impg/1gfeM3p97xAsccCe7bdoGhQABT9WcLEqM1eM9w/aCdF3sbFVe0.jpg?size=320x213&quality=96&sign=9090bd6a22a62612debec7b115c2e235&c_uniq_tag=0sSCn8kgJDx2fPOSXLBoOSZgw7K5cDltzM-ojaW48UM&type=album'];

let left = document.getElementById('left');
let right = document.getElementById('right');
const slider = document.getElementById('slider');

let i = 0;

let timerInterval = setInterval(changeImage, 1500);

function changeImage() {
    slider.src = texts[i];
    i++;
    if( i === texts.length) {
        i = 0;
    }
}

left.addEventListener('click', function(e) {
    clearInterval(timerInterval);
    e.preventDefault();
    slider.src = texts[i];
    --i;
    if(i < 0) {
        i = texts.length - 1;
    }
});

right.addEventListener('click', function(e) {
    clearInterval(timerInterval);
    e.preventDefault();
    slider.src = texts[i];
    ++i;
    if(i >= texts.length) {
        i = 0;
    }
});
