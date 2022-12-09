'use strict';

// №1 ⊗jsPrStSK
// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
// Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
// №2 ⊗jsPrStSK
// Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.
const input = document.querySelector('#result');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const box = document.querySelector('.box');

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и",  "т", "ь", "б", "ю", ",", ".", "?", "space"];
let caps;

btn1.addEventListener('click', function createKeyboard(event) {
    for(let key of keys) {
        let btn = document.createElement('button');
        btn.innerHTML = key;
        btn.value = key;
        btn.classList.add('key');
        if(btn.value === 'space') {
            btn.classList.add('key', 'key-long');
            btn.value = " ";
        }
        if(btn.value === 'caps') {
            btn.removeAttribute('value');
            btn.setAttribute('id', 'caps');
        }
        box.classList.add('box_active');
        box.appendChild(btn);
    }
    caps = document.querySelector('#caps');
    console.log(caps);
    btn1.removeEventListener('click', createKeyboard);
});

box.addEventListener('click', function(event) {
    let key = event.target.closest('button');
    if(key === null || key === undefined) {
        return input.value += '';
    }
    if(event.target.id === 'caps') {
        caps.classList.toggle('active');
    }
    if(caps.classList.contains('active')) {
        input.value += key.value.toUpperCase();
    } else {
        input.value += key.value;
    }
});

btn2.addEventListener('click', function() {
    input.value = '';
});

btn3.addEventListener('click', function() {
    input.value = input.value.slice(0, -1);
});
