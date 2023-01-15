'use strict';
// В данном разделе мы реализуем календарь. Для простоты просто сделаем так, чтобы календарь выводился за текущий месяц. Но с прицелом на то, что его можно будет доработать так, чтобы можно было менять месяц и год

let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let info = calendar.querySelector('.info');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//console.log(year, month);

function range(count) {
	let numbers = Array.from(Array(count), (_, i) => i + 1);
	return numbers;
} 

function getLastDay(year, month) {
	let lastDay = (new Date(year, month + 1, 0)).getDate();
	return lastDay;
}

function getFirstWeekDay(year, month) {
	let firstWeekDay = (new Date(year, month, 1)).getDay();
	return firstWeekDay;
}

function getLastWeekDay(year, month) {
	let lastWeekDay = (new Date(year, month + 1, 0)).getDay();
	return lastWeekDay;
}

function normalize(arr, left, right) { // добавляем в массив справа и слева пустые элементы
	for(let i = 0; i < left; i++) {
		arr.unshift('');
	}

	for(let i = 0; i < right; i++) {
		arr.push('');
	}
	// console.log(arr);
	return arr;
}

function chunk(arr, n) { // из одномерного массива в двумерный; n - кол-во элементов в каждом подмассиве
	const result = [];
	for(let i = 0; i < arr.length; i += n) {
		result.push(arr.slice(i, i + n));
	}
	return result;
}

function createTable(parent, arr) {
	body.textContent = '';
	let cells = [];
	arr.forEach(elements => {
		let tr = document.createElement('tr');

		elements.forEach(elem => {
			let td = document.createElement('td');
			td.textContent = elem;
			cells.push(td);
			tr.appendChild(td);
		});
		body.appendChild(tr);
	});
	return cells;
}

function draw() {
	let year  = date.getFullYear();
	let month = date.getMonth();
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	
	createTable(body, nums);
	info.textContent = months[month] + ' ' + year;
	
}

draw();

next.addEventListener('click', function checkNext() {
	date.setMonth(date.getMonth() + 1);
	draw();
});

prev.addEventListener('click', function() {
	date.setMonth(date.getMonth() - 1);
	draw();
});

// function getNextYear(year, month) {
// 	if(months[month] === months[11]) {
// 		year++;
// 	}
// 	//date.setFullYear(year);
// 	console.log(year, month);
// 	return year;
// }

// function getPrevYear(year, month) {
// 	if(months[month] === months[0]) {
// 		year--;
// 	}
// 	// date.setFullYear(year);
// 	console.log(year, month);
// 	return year;
// }

// function getNextMonth(month) {
// 	if(months[month] === months[11]) {
// 		month = 0;
// 		//date.setMonth(month);
// 	} else {
// 		month++;
// 		//date.setMonth(month);
// 	}
	
// 	console.log(year, month);
// 	return month;
// } 

// function getPrevMonth(month) {
// 	if(months[month] === months[0]) {
// 		month = 11;
// 	} else {
// 		month--;
// 	}
// 	//date.setMonth(month);
// 	console.log(year, month);
// 	return month;
// } 