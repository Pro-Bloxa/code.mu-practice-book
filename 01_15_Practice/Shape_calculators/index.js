'use strict';

// №1 ⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let result1 = document.querySelector('#result1');

button1.addEventListener('click', function() {
    let res = +input1.value;
    if(isNaN(res) || res == "" || res == null) {
        alert('Вводите только цифры!');
        input1.value = '';
    } else {
        result1.textContent = 'Периметр ' + res * 4 + ' см.';
    }
    
});

button2.addEventListener('click', function() {
    let res = +input1.value;
    if(isNaN(res) || res == "" || res == null) {
        alert('Вводите только цифры!');
        input1.value = '';
    } else {
        result1.textContent = 'Площадь ' + res * res  + ' кв.см.';
    }
});

// №2 ⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let button3 = document.querySelector('#btn3');
let button4 = document.querySelector('#btn4');
let result2 = document.querySelector('#result2');

button3.addEventListener('click', function() {
    let res2 = +input2.value;
    let res3 = +input3.value;
    if((isNaN(res2) || res2 == "" || res2 == null) &&
    (isNaN(res3) || res3 == "" || res3 == null)) {
        alert('Вводите только цифры!');
        input2.value = '';
        input3.value = '';
    } else {
        result2.textContent = 'Периметр ' + (res2 + res3) * 2 + ' см.';
    }
    
});

button4.addEventListener('click', function() {
    let res2 = +input2.value;
    let res3 = +input3.value;
    if((isNaN(res2) || res2 == "" || res2 == null) &&
    (isNaN(res3) || res3 == "" || res3 == null)) {
        alert('Вводите только цифры!');
        input2.value = '';
        input3.value = '';
    } else {
        result2.textContent = 'Площадь ' + res2 * res3 + ' кв.см.';
    }
});

// №3 ⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
let input4 = document.querySelector('#input4');
let button5 = document.querySelector('#btn5');
let button6 = document.querySelector('#btn6');
let result3 = document.querySelector('#result3');
const pi = 3.14;

button5.addEventListener('click', function() {
    let res4 = +input4.value;
    if(isNaN(res4) || res4 == "" || res4 == null) {
        alert('Вводите только цифры!');
        input4.value = '';
    } else {
        result3.textContent = 'Площадь ' + pi * (res4 * res4) + ' кв.см.';
    }
});

button6.addEventListener('click', function() {
    let res4 = +input4.value;
    if(isNaN(res4) || res4 == "" || res4 == null) {
        alert('Вводите только цифры!');
        input4.value = '';
    } else {
        result3.textContent = 'Длина окружности ' + 2 * pi * res4 + ' см.';
    }
});

// №4 ⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
let input5 = document.querySelector('#input5');
let input6 = document.querySelector('#input6');
let input7 = document.querySelector('#input7');
let button7 = document.querySelector('#btn7');
let result4 = document.querySelector('#result4');


button7.addEventListener('click', function() {
    let res5 = +input5.value;
    let res6 = +input6.value;
    let res7 = +input7.value;
    let p = (res5 + res6 + res7) / 2;
    console.log(p);
    if((isNaN(res5) || res5 == "" || res5 == null) &&
    (isNaN(res6) || res6 == "" || res6 == null) &&
    (isNaN(res7) || res7 == "" || res7 == null)) {
        alert('Вводите только цифры!');
        input5.value = '';
        input6.value = '';
        input6.value = '';
    } else if((p * (p - res5) * (p - res6) * (p - res7)) === 0) {
        alert('Такого треугольника не существует!');
    } else {
        result4.textContent = 'Площадь ' + Math.sqrt(p*(p-res5)*(p-res6)*(p-res7)).toFixed(2) + ' кв.см.';
        console.log(p * (p - res5) * (p - res6) * (p - res7));
    }
});
