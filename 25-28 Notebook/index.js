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

btnSave.addEventListener('click', function() {
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

        let spanOpen = elemLi.querySelector('.open');
        spanOpen.addEventListener('click', openNote);

        let spanRemove = elemLi.querySelector('.remove');
        spanRemove.addEventListener('click', removeNote);
    }

    if(this.dataset.mode == 'update') {
        let spanOpen = document.querySelector('span.active');
        console.log('spanOpen: ' + spanOpen);
        //let index = +spanOpen.parentElement.dataset.key - 1; // когда есть удаленные элементы, индекс высчитывается не верно
        let arrSpanOpen = Array.from(document.querySelectorAll('span.open'));
        let index = arrSpanOpen.indexOf(spanOpen);

        texts[index] = textarea.value;
        textarea.value = ''; 
        btnSave.dataset.mode = 'create';
        changeMode.textContent = 'Режим создания новой записи';
    }

});

function openNote() {
    let spanActive = document.querySelector('span.active');

    if(spanActive) {
        spanActive.classList.remove('active');
    }

    this.classList.add('active');
    // let indexCurrent = +this.parentElement.dataset.key - 1; // когда есть удаленные элементы, индекс высчитывается не верно
    let arrSpanOpen = Array.from(document.querySelectorAll('span.open'));
    let indexCurrent = arrSpanOpen.indexOf(this);

    textarea.value = texts[indexCurrent];
    textarea.focus();
    btnSave.dataset.mode = 'update';
    changeMode.textContent = 'Режим редактирования';
}

function removeNote() {
    let indexRemove = +this.parentElement.dataset.key - 1;
    texts.splice(indexRemove, 1);
    this.parentElement.remove();
}

btnChangeMode.addEventListener('click', function() {
    if(btnSave.dataset.mode == 'create') {
        btnSave.dataset.mode = 'update';
        changeMode.textContent = 'Режим редактирования';
    } else if(btnSave.dataset.mode == 'update') {
        btnSave.dataset.mode = 'create';
        changeMode.textContent = 'Режим создания новой записи';
    }
});
