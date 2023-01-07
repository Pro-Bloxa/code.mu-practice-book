'use strict';
// В данном разделе вы с моей помощью реализуете игру. Игра будет представлять собой таблицу, ячейки которой окрашены в разные случайные цвета.
// Пусть есть определенный набор цветов, например, красный, зеленый, синий. Пусть каждый клик на ячейку меняет ее цвет по кругу. Цель игры - за наименьшее количество кликов сделать таблицу одного - любого - цвета.

let field = document.querySelector('#field');
let counts = document.querySelector('.counts');

let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let count = 0; // количество кликов по ячейкам

for(let i = 0; i < rows; i++) {
	let tr = document.createElement('tr');
	for(let j = 0; j < cols; j++) {
		let td = document.createElement('td');
		let color = colors[Math.floor(Math.random() * colors.length)]; // выбор номера цветя для ячейки
		td.classList.add(color);
		tr.appendChild(td);
	}
	field.appendChild(tr);
}

let tds = Array.from(field.querySelectorAll('td'));

tds.forEach(item => {
	item.addEventListener('click', function() {
		count++;
		
		let color = this.classList.value;
		let index = colors.indexOf(color);
		
		this.classList.remove(colors[index]);

		if(index === colors.length - 1) {
			this.classList.add(colors[0]);
		} else {
			this.classList.add(colors[index + 1]);
		}
		counts.textContent = 'Количество кликов: ' + count;

		isVictory(item);
	});
});

function isVictory(elem) {
	let arr = [];
	let color = elem.classList.value;

	tds.forEach(element => {
		if(element.classList.contains(color)) {
			arr.push(color);
		}
		console.log('длина arr: ' + arr.length, 'длина tds: ' + tds.length);
	
		if(arr.length === tds.length) {
			alert('Победа!!!');
		}
	});
}

// не поняла, как с помощью функции "окрасить" ячейки, поэтому сделала по-другому
// function changeColor(colors) {
// 	let num = Math.floor(Math.random() * colors.length);
// 	return num;
// }