'use strict';

// №1 ⊗jsPrStTA
// Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
let textarea1 = document.querySelector('#text1');
let result1 = document.querySelector('#result1');

textarea1.addEventListener('blur', function() {
    let result = textarea1.value.split(' ');
    result1.textContent = result.length;
});

// №2 ⊗jsPrStTA
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.
let textarea2 = document.querySelector('#text2');
let result2 = document.querySelector('#result2');
let result3 = document.querySelector('#result3');

textarea2.addEventListener('blur', function() {
    let words = textarea2.value.split(' ');
    result2.textContent = words.length;
    let symbols = textarea2.value.split('');
    console.log(symbols);
    result3.textContent = symbols.length;
});

// №3 ⊗jsPrStTA
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.
let textarea3 = document.querySelector('#text3');
let result4 = document.querySelector('#result4');
let result5 = document.querySelector('#result5');
let result6 = document.querySelector('#result6');

textarea3.addEventListener('blur', function() {
    let words = textarea3.value.split(' ');
    result4.textContent = words.length;

    let symbols = textarea3.value.split('');
    result5.textContent = symbols.length;

    let arr = [];
    symbols.forEach(element => {
        if(element !== ' ') {
            arr.push(element);
        }
    });
    result6.textContent = arr.length;
});

// №4 ⊗jsPrStTA
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.
let textarea4 = document.querySelector('#text4');
let result7 = document.querySelector('#result7');
let result8 = document.querySelector('#result8');
let result9 = document.querySelector('#result9');
let result10 = document.querySelector('#result10');

textarea4.addEventListener('blur', function() {
    let words = textarea4.value.split(' ');
    result7.textContent = words.length;

    let symbols = textarea4.value.split('');
    result8.textContent = symbols.length;

    let arr = [];
    symbols.forEach(element => {
        if(element !== ' ') {
            arr.push(element);
        }
    });
    result9.textContent = arr.length;

    let originalSimbols = [...new Set(textarea4.value.split(''))];
    let res = [];
    originalSimbols.forEach(item => {
        res.push({
            name: '"' + item + '"',
            value: getPercentOfSimbol(item, arr).toFixed(2) + " %"
          });
    });

    let table = document.querySelector('table');
    for (let i = 1; i <= res.length; i++) {
        table.insertAdjacentHTML(
          "beforeend",
          '<tr><th scope="row">' +
            i +
            "</th><td>" +
            res[i - 1].name +
            "</td><td>" +
            res[i - 1].value +
            "</td></tr>"
        );
    }
});

function getPercentOfSimbol(simbol, array) {
    const times = array.filter((item) => item == simbol).length;
    return (times * 100) / array.length;
}

// №5 ⊗jsPrStTA
// В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.
let textarea5 = document.querySelector('#text5');
let checkbox1 = document.querySelector('#checkbox1');
let checkbox2 = document.querySelector('#checkbox2');
let checkbox3 = document.querySelector('#checkbox3');
let checkbox4 = document.querySelector('#checkbox4');
let result11 = document.querySelector('#result11');
let result12 = document.querySelector('#result12');
let result13 = document.querySelector('#result13');
let result14 = document.querySelector('#result14');

textarea5.addEventListener('blur', function() {
    if(checkbox1.checked) {
        let words = textarea5.value.split(' ');
        result11.textContent = words.length;
    }
    let symbols, arr;
    if(checkbox2.checked) {
        symbols = textarea5.value.split('');
        result12.textContent = symbols.length;
    }
    if(checkbox3.checked) {
        arr = [];
        symbols.forEach(element => {
            if(element !== ' ') {
                arr.push(element);
            }
        });
        result13.textContent = arr.length;
    }
    if(checkbox4.checked) {
        let originalSimbols = [...new Set(textarea5.value.split(''))];
        let res = [];
        originalSimbols.forEach(item => {
            res.push({
                name: '"' + item + '"',
                value: getPercentOfSimbol(item, arr).toFixed(2) + " %"
              });
        });
    
        let table = document.querySelector('#table2');
        for (let i = 1; i <= res.length; i++) {
            table.insertAdjacentHTML(
              "beforeend",
              '<tr><th scope="row">' +
                i +
                "</th><td>" +
                res[i - 1].name +
                "</td><td>" +
                res[i - 1].value +
                "</td></tr>"
            );
        }
    }
});