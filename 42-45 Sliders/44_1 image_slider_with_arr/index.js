'use strict';

// Давайте теперь сделаем слайдер картинок. Пусть в HTML коде у нас дан тег img
// Пусть также у нас дан массив картинок
// Давайте сделаем так, чтобы каждую секунду в теге img появлялась новая картинка из нашего массива.
// №1⊗jsPrSlIVA
// Реализуйте описанный слайдер. Сделайте так, чтобы картинки ходили по кругу.

let texts = ['https://stihi.ru/pics/2020/01/02/4528.jpg', 'http://ckro.baranovichi.edu.by/be/sm.aspx?guid=56663', 'https://avatars.dzeninfra.ru/get-zen-logos/1640044/pub_6241af4e4003be10c5e31deb_6265217a0105543231d14370/xxh', 'https://sun9-36.userapi.com/impg/1gfeM3p97xAsccCe7bdoGhQABT9WcLEqM1eM9w/aCdF3sbFVe0.jpg?size=320x213&quality=96&sign=9090bd6a22a62612debec7b115c2e235&c_uniq_tag=0sSCn8kgJDx2fPOSXLBoOSZgw7K5cDltzM-ojaW48UM&type=album'];

const slider = document.getElementById('slider');

let i = 0;

let timerInterval = setInterval(function() {

    slider.src = texts[i];
    i++;
    if( i === texts.length) {
        i = 0;
    }

}, 1000);
