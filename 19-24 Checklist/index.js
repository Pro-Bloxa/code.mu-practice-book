'use strict';

// В данном уроке мы реализуем чеклист. Чеклистом называется программа, которая позволяет сделать список планируемых дел, а затем по мере выполнения этим дел отмечать эти дела сделанными. Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными.

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let elemLi = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task');
        task.textContent = this.value;
        elemLi.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.textContent = 'удалить';
        elemLi.appendChild(remove);

        let mark = document.createElement('span');
        mark.classList.add('mark');
        mark.textContent = 'сделано';
        elemLi.appendChild(mark);

        list.appendChild(elemLi);
        this.value = '';
	}

    let editArr = document.querySelectorAll('.task');
    editArr.forEach(item => {
        item.addEventListener('dblclick', function() {
            let input = document.createElement('input');
            this.textContent = '';
            this.appendChild(input);
            let thisItem = this;
            input.addEventListener('keypress', function(event) {
                if(event.key == 'Enter') {
                    thisItem.textContent = this.value;
                }
            });
        });
    });

    let removeArr = document.querySelectorAll('.remove');
    removeArr.forEach(item => {
        item.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    let markArr = document.querySelectorAll('.mark');
    markArr.forEach(item => {
        item.addEventListener('click', function() {
            this.parentElement.classList.add('done');
        });
    });
});


