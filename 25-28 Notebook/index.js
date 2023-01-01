'use strict';

// Давайте сделаем записную книжку, позволяющую создавать записи с различным текстом. Пусть эта записная книжка представляет собой текстареа и кнопку. Слева от текстареа пусть будет список созданных записей.
// В текстареа будет вводится текст. После нажатия на кнопку текст текстареа должен очистится, а в меню должна появится ссылка с текстом 'запись N', где вместо N будет порядковый номер записи.
// По нажатию на ссылку меню в текстареа должен появится текст соответствующей записи. Этот текст можно подредактировать и, по нажатию на кнопку, он должен обновится.

const textarea = document.querySelector('textarea');
const btnSave = document.querySelector('#text button');
const btnChangeMode = document.querySelector('#create button');
const notes = document.getElementById('notes');
const changeMode = document.querySelector('.change-mode');

let texts = [];

btnSave.addEventListener('click', function(event) {
    if(this.dataset.mode == 'create') {
        texts.push(textarea.value);
        let elemLi = document.createElement('li');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');

        let num;
        if(notes.getElementsByTagName('li').length === 0) {
            num = 1;
        }
        if(notes.getElementsByTagName('li').length > 0) {
            num = +notes.lastElementChild.getAttribute('data-key') + 1;
        }

        span1.classList.add('open');
        span2.classList.add('remove');
        span1.textContent = "Запись " + num;
        span2.textContent = "   X";
        elemLi.appendChild(span1);
        elemLi.appendChild(span2);
        elemLi.setAttribute('data-key', num);
        notes.appendChild(elemLi);
        textarea.value = '';
        textarea.focus();
    }

    let spansOpen = Array.from(notes.getElementsByClassName('open'));
    let spansRemove = Array.from(notes.getElementsByClassName('remove'));

    spansOpen.forEach(item => {
        item.addEventListener('click', function () {
            let spanActive = document.querySelector('span.active');
            if(spanActive) {
                spanActive.classList.remove('active');
            }

            this.classList.add('active');
            let indexCurrent = spansOpen.indexOf(this);
            textarea.value = texts[indexCurrent];
            textarea.focus();
            btnSave.dataset.mode = 'update';
            changeMode.textContent = 'Режим редактирования';
        });
    });

    if(this.dataset.mode == 'update') {
        spansOpen.forEach(item => { 
            let index;
            if(item.matches('span.active')) {
                index = spansOpen.indexOf(item);
                texts[index] = textarea.value;
                textarea.value = ''; 
                btnSave.dataset.mode = 'create';
                changeMode.textContent = 'Режим создания новой записи';
            }
        });
    }

    spansRemove.forEach(item => {
        item.addEventListener('click', function() {
            let indexRemove = spansRemove.indexOf(this);
            this.parentElement.remove();
            texts.splice(indexRemove, 1); // удаляются все элементы ниже удаляемого
        });
    });
});

btnChangeMode.addEventListener('click', function() {
    if(btnSave.dataset.mode == 'create') {
        btnSave.dataset.mode = 'update';
        changeMode.textContent = 'Режим редактирования';
    } else if(btnSave.dataset.mode == 'update') {
        btnSave.dataset.mode = 'create';
        changeMode.textContent = 'Режим создания новой записи';
    }
});
