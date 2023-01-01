'use strict';

// В данном разделе мы реализуем калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь нашего сайта будет вносить свои покупки.
// Пусть покупки вносятся с помощью формы. Кроме того, для каждого продукта предусмотрим ссылку на удаление. Сделаем также возможность редактирования названия, цены и количества продукта. Пусть такое редактирование будет происходить по двойному клику по ячейке таблицы.
// Пусть под таблицей выводится суммарная стоимость продуктов. Сделаем так, чтобы эта сумма пересчитывалась при удалении и при редактировании продуктов.

let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(tr, value, name) {
	let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(name);
    tr.appendChild(td);
    return td;
}

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
        tr.remove();
        recountTotal();
    });
	
	table.appendChild(tr);
    recountTotal();
});

function recountTotal() {
	let costs = Array.from(table.getElementsByClassName('cost'));

	if (costs) {
		total.textContent = costs.reduce((acc, item) => acc + +item.innerHTML, 0);
	}
}

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
        let text = this.textContent;
        this.textContent = '';

		let input = document.createElement('input');
        input.value = text;
        td.appendChild(input);
        input.focus();

        input.addEventListener('keyup', function(e) {
            if(e.key === 'Enter') {
                td.textContent = this.value;
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let tr = td.parentElement;
                    let tds = Array.from(tr.querySelectorAll('td'));
                    console.log(tds);

                    tds[3].textContent = tds[1].textContent * tds[2].textContent;
					
                    recountTotal();
				}
            }
        });
	});
}
