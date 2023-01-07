'use strict';

// №2⊗jsPrSlIVA
// Модифицируйте предыдущую задачу так, чтобы над картинкой также появились стрелки вперед и назад. То есть слайдер будет сам проматываться таймером, но при желании юзер также сможет промотать его ссылками.

let cells = Array.from(document.querySelectorAll('#field td'));
//let gamers = ['X', 'O'];

start(cells);

function start(cells) {
    let i = 0; //начальное значение счетчика ходов

    cells.forEach(elem => {
        elem.addEventListener('click', function clickElem() {
        //    if(i % 2 === 0) {
        //     this.textContent = 'X';
        //    } else {
        //     this.textContent = 'O';
        //    }
        //    i++;

            this.textContent = ['X', 'O'][i % 2]; // закомментированный код сокращен до одной строки
            this.removeEventListener('click', clickElem); // отмена повторного нажатия на ячейку

            if (isVictory(cells)) {
				alert('Победил игрок ' + this.textContent);
			} else if (i == 8) {
                alert('ничья');
            }

            i++;
        });
    });
}

function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
	}
	
	return false;
}