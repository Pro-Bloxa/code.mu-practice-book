'use strict';

// Сейчас мы сделаем сайт, который будет выдавать предсказания. Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.
// Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.
// №1 ⊗jsPrStPrd
// Продумайте, как удобнее хранить предсказания.
// №2 ⊗jsPrStPrd
// Реализуйте описанный сайт.
// №3 ⊗jsPrStPrd
// Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.

const parent = document.querySelector('#parent');
const timer = document.querySelector('#timer');
const text = document.querySelector('#text');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalId;

const predictionGood = {
    1: 'Это судьбоносный день',
    2: 'Будьте внимательны в мелочах и Вам улыбнется удача',
    3: 'Нет ничего невозможного - таким должен быть Ваш девиз',
    4: 'Не торопитесь в этот день, все хорошо обдумайте, чтобы добиться невероятных высот',
    5: 'В обычной беседе Вы получиье ответ на волнующий Вас вопрос',
    6: 'Сегодняшнее новое знакомство станет судьбоносным',
    7: 'Не отказывайтесь от своей мечты, она достижима!', 
    8: 'Проведите этот день со своими родными и близкими, Вам это доставит массу удовольствий',
    9: 'Вы избраны быть счастлоивыми и удачливыми'
};
const predictionBad = {
    10: 'Будьте внимательны в мелочах - Вас будут пытаться обмануть',
    11: 'Не торопитесь в этот день, все хорошо обдумайте, иначе совершите непоправимые ошибки',
    12: 'Потеря денег по неосторожности',
    13: 'Непростой день, останьтесь дома',
    14: 'Не верьте никому сегодня!',
    15: 'Сегодняшний риск приведет к ссоре с близкими',
    16: 'Видимо, настало время немного погрустить', 
    17: 'Перестаньте быть навязчивыми',
    18: 'Пристегните ремни: финансовые трудности.'
};

const predictions = {...predictionGood, ...predictionBad};
console.log(predictions);

let keys = Object.keys(predictions);
console.log(keys);

start.addEventListener('click', function() {
    start.classList.remove('active');
    stop.classList.add('active');
    intervalId = setInterval(() => {
        let number = Math.floor(Math.random() * keys.length);
        timer.textContent = keys[number];
    }, 100);
});

stop.addEventListener('click', function() {
    stop.style.display = 'none';
    let result = document.createElement('p');
    result.textContent = predictions[timer.textContent];
    parent.appendChild(result);
    clearInterval(intervalId);
    setColor();
});

function setColor() {
    let p = document.querySelector('p');
    (predictionGood[timer.textContent] !== undefined) ? p.style.color = 'green' : p.style.color = 'red';
}