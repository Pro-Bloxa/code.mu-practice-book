'use strict';
// Давайте сделаем игру, в которой будет квадратная таблица, в которой случайным образом будут числа от 1 до N, где N - количество ячеек в таблице. Суть игры будет заключаться в том, что нужно будет кликать по ячейкам в правильном порядке: сначала на 1, потом на 2, потом на 3 и так далее.
// Если игрок кликает на правильную ячейку - пусть она активируется и делает красный фон. Если же он кликает на неправильную ячейку - ничего не происходит.
// Когда игрок найдет последнее число - пусть игра начинается сначала, но таблица увеличивается на одну строку и одну колонку.

let field = document.querySelector('#field');

start(2);

function start(size) {
	activate(build(field, prepare(size)), size);
}

function build(field, arr) { // строительство таблицы
	field.textContent = '';
	let cells = [];

	arr.forEach(elements => {
		let tr = document.createElement('tr');

		elements.forEach(elem => {
			let td = document.createElement('td');
			td.textContent = elem;
			cells.push(td);
			tr.appendChild(td);
		});
		field.appendChild(tr);
	});

	console.log(cells);
	return cells;
}

function activate(cells, size) {
	let counter = 1;
	cells.forEach(item => {
		item.addEventListener('click', function() {
			if (this.textContent == counter) {
				this.classList.add('active');

				if (counter == size * size) {
					start(++size);
				}
				
				counter++;
			}
		});
	});
}

function prepare(size) { // подготовка двухмерного массива
	let arr = [];
	
	arr = range(size * size);
	arr = shuffle(arr);
	arr = chunk(arr, size);
	
	return arr;
}

function range(count) { // массив с числами от  1 до максималь.числа таблицы
	let numbers = Array.from(Array(count), (_, i) => i + 1);
	return numbers;
}

function shuffle(arr) { // перемешивание массива в случайном порядке
	for (let i = arr.length - 1; i > 0; i--) { // версия Фишера-Йейтса
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
	return arr;
}

function chunk(arr, n) { // разбивка одномерного массива в двумерный
	const result = [];
	for (let i = 0; i < arr.length; i += n) {
	  result.push(arr.slice(i, i + n));
	}
	return result;
}
