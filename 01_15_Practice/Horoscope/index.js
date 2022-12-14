'use strict';

// Сейчас мы реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор. 
// №1 ⊗jsPrStHrs
// Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// №2 ⊗jsPrStHrs
// Реализуйте показ гороскопа за текущий день.
// №3 ⊗jsPrStHrs
// А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.

const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const youSign = document.querySelector('.you-sign');
const descr = document.querySelector('.description');
const radioToday = document.querySelector('.today');
const radioTomorrow = document.querySelector('.tomorrow');
const radioAfterTomorrow = document.querySelector('.after-tomorrow');

const zodiacSigns = ['Овен','Телец','Близнецы','Рак', 'Лев', 'Дева', 'Весы','Скорпион', 'Стрелец','Козерог', 'Водолей', 'Рыбы'];

const description = ['Это судьбоносный день', 'Будьте внимательны в мелочах', 'Нет ничего невозможного - таким должен быть Ваш девиз', 'Не торопитесь в этот день, все хорошо обдумайте', 'В обычной беседе Вы получиье ответ на волнующий Вас вопрос', 'Сегодняшнее новое знакомство станет судьбоносным', 'Не отказывайтесь от своей мечты, она достижима!', 'Проведите этот день со своими родными и близкими', 'Внешность обманчива - не забывайте об этом!'];

input.addEventListener('keydown', function(event) {
    let prediction = description[Math.floor(Math.random()*description.length)];
    console.log(prediction);
    if(event.key === 'Enter' && input.value !== '') {
        defineSign();
        if(radioToday.checked) {
            descr.textContent = 'Ваш гороскоп на сегодня: ' + prediction; 
        } else if(radioTomorrow.checked) {
            descr.textContent = 'Ваш гороскоп на завтра: ' + prediction; 
        } else if(radioAfterTomorrow.checked) {
            descr.textContent = 'Ваш гороскоп на послезавтра: ' + prediction; 
        } else {
            descr.textContent = 'Выберите день прогноза';
        }
    }
});

function defineSign() {
    let birthday = input.value.split('.');
    let day = +birthday[0];
    let month = +birthday[1];
    if (month === 3 && day >= 21 || month === 4 && day <= 19) {
        youSign.textContent = 'Ваш знак зодиака Овен';
    } else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
        youSign.textContent = 'Ваш знак зодиака Телец';
    } else if (month === 5 && day >= 21 || month === 6 && day <= 20) {
        youSign.textContent = 'Ваш знак зодиака Близнецы';
    } else if (month === 6 && day >= 21 || month === 7 && day <= 22) {
        youSign.textContent = 'Ваш знак зодиака Рак';
    } else if (month === 7 && day >= 23 || month === 8 && day <= 22) {
        youSign.textContent = 'Ваш знак зодиака Лев';
    } else if (month === 8 && day >= 23 || month === 9 && day <= 22) {
        youSign.textContent = 'Ваш знак зодиака Дева';
    } else if (month === 9 && day >= 23 || month === 10 && day <= 22) {
        youSign.textContent = 'Ваш знак зодиака Весы';
    } else if (month === 10 && day >= 23 || month === 11 && day <= 22) {
        youSign.textContent = 'Ваш знак зодиака Скорпион';
    } else if (month === 11 && day >= 23 || month === 12 && day <= 21) {
        youSign.textContent = 'Ваш знак зодиака Стрелец';
    } else if (month === 12 && day >= 21 || month === 1 && day <= 19) {
        youSign.textContent = 'Ваш знак зодиака Водолей';
    } else if (month === 1 && day >= 20 || month === 2 && day <= 2) {
        youSign.textContent = 'Ваш знак зодиака Рыбы';
    } else if(month === 2 && day >= 20 || month === 3 && day <= 20){
        youSign.textContent = 'Ваш знак зодиака Козерог';
    }
}

