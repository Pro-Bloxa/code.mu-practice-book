'use strict';

// №1 ⊗jsPrStMC
// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let button1 = document.querySelector('#btn1');
let result1 = document.querySelector('#result1');

button1.addEventListener('click', function() {
    let a = input1.value;
    let b = input2.value;
    let c = input3.value;
    let D = b * b - 4 * a * c;

    if(a === 0) {
        alert('"a" не должно равняться нулю!');
    }
    if(D < 0) {
        alert('Корней нет');
    } else if (D === 0) {
        result1.textContent = `Корень уровнения: ${(-b + Math.sqrt(D)) / (2 * a)}`;
    } else if (D > 0) {
        let res1 = (-b + Math.sqrt(D)) / (2 * a);
        let res2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(res1, res2);
        result1.textContent = `Корень 1: ${res1.toFixed(2)}; Корень 2: ${res2.toFixed(2)}`;
    }
});

// №2 ⊗jsPrStMC
// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
let a = +document.querySelector('#input4').value;
let b = +document.querySelector('#input5').value;
let c = +document.querySelector('#input6').value;
let button2 = document.querySelector('#btn2');
let result2 = document.querySelector('#result2');

button2.addEventListener('click', function() {
    let arr = [a, b, c];
    let max = Math.max(...arr);
    console.log(max);
    let result = arr.filter(item => item !== max).map(elem => elem ** 2).reduce((sum, current) => sum + current);
    console.log(result);
    if(max ** 2 === result) {
        result2.textContent = 'Числа являются тройкой Пифагора';
    } else {
        result2.textContent = 'Числа не являются тройкой Пифагора';
    }
});

// №3 ⊗jsPrStMC
// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
let number = document.querySelector('#input7');
let button3 = document.querySelector('#btn3');
let result3 = document.querySelector('#result3');

button3.addEventListener('click', function() {
    let num = +number.value;
    let arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
        arr.push(i);
        }
    }
    result3.textContent = arr.join(', ');
});

// №4 ⊗jsPrStMC
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
let number1 = document.querySelector('#input8');
let number2 = document.querySelector('#input9');
let button4 = document.querySelector('#btn4');
let result4 = document.querySelector('#result4');

button4.addEventListener('click', function() {
    let num1 = +number1.value;
    let num2 = +number2.value;
    let arr1 = getDividers(num1);
    let arr2 = getDividers(num2);
    let arr = [];

    arr1.forEach(item => {
        if(arr2.includes(item)) {
            arr.push(item);
        }
    });
    result4.textContent = arr.join(', ');
});

function getDividers(num) {
    let arrNew = [];
    for(let i = 0; i <= num; i++) {
      if(num % i === 0) {
        arrNew.push(i);
      }
    }
    return arrNew;
}

// №5 ⊗jsPrStMC
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
let number3 = document.querySelector('#input10');
let number4 = document.querySelector('#input11');
let button5 = document.querySelector('#btn5');
let result5 = document.querySelector('#result5');

button5.addEventListener('click', function() {
    let num1 = +number3.value;
    let num2 = +number4.value;
    let arr1 = getDividers(num1);
    let arr2 = getDividers(num2);
    let arr = [];

    arr1.forEach(item => {
        if(arr2.includes(item)) {
            arr.push(item);
        }
    });

    result5.textContent = Math.max(...arr);
});

function getDividers(num) {
    let arrNew = [];
    for(let i = 0; i <= num; i++) {
      if(num % i === 0) {
        arrNew.push(i);
      }
    }
    return arrNew;
}

// №6 ⊗jsPrStMC
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
let number5 = document.querySelector('#input12');
let number6 = document.querySelector('#input13');
let button6 = document.querySelector('#btn6');
let result6 = document.querySelector('#result6');

button6.addEventListener('click', function() {
    let num1 = +number5.value;
    let num2 = +number6.value;
    let arr1 = getDividers(num1);
    let arr2 = getDividers(num2);
    let arr = [];

    arr1.forEach(item => {
        if(arr2.includes(item)) {
            arr.push(item);
        }
    });

    result6.textContent = Math.min(...arr);
});

function getDividers(num) {
    let arrNew = [];
    for(let i = 0; i <= num; i++) {
      if(num % i === 0) {
        arrNew.push(i);
      }
    }
    return arrNew;
}