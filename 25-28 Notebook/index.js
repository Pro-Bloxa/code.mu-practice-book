'use strict';

// Давайте сделаем записную книжку, позволяющую создавать записи с различным текстом. Пусть эта записная книжка представляет собой текстареа и кнопку. Слева от текстареа пусть будет список созданных записей.
// В текстареа будет вводится текст. После нажатия на кнопку текст текстареа должен очистится, а в меню должна появится ссылка с текстом 'запись N', где вместо N будет порядковый номер записи.
// По нажатию на ссылку меню в текстареа должен появится текст соответствующей записи. Этот текст можно подредактировать и, по нажатию на кнопку, он должен обновится.

const textarea = document.querySelector('textarea');
const btnSave = document.querySelector('#text button');
const btnChangeMode = document.querySelector('#create button');
const notes = document.querySelector('#notes');
const changeMode = document.querySelector('.change-mode');

let textRemove = document.querySelector('.text-remove');

let texts = [];

btnSave.addEventListener('click', function(event) {

    if(this.dataset.mode == 'create') {
        texts.push(textarea.value);
        let elemLi = document.createElement('li');

        let span1 = document.createElement('span');
        let span2 = document.createElement('span');

        let num = texts.length;

        span1.classList.add('open');
        span2.classList.add('remove');
        span1.innerHTML = "Запись " + num;
        span2.innerHTML = "  X";
        elemLi.appendChild(span1);
        elemLi.appendChild(span2);


        span1.setAttribute('data-key', num);
        
        span1.addEventListener('click', (event) => {

            let spanActive = notes.querySelector('span.active');
            
            let current = num - 1;
            textarea.value = texts[current];

            event.target.classList.add('active');
            if(spanActive) {
                spanActive.classList.remove('active');
            }
            textarea.focus();
            this.dataset.mode = 'update';
            changeMode.textContent = 'Режим редактирования';
        });

        notes.appendChild(elemLi);
        textarea.value = '';
        textarea.focus();
    }

    let spansRemove = Array.from(notes.querySelectorAll('.remove'));
    
    spansRemove.forEach(item => {
        item.addEventListener('click', (event) => {
            let li = event.target.parentElement;
            let index = li.firstElementChild.getAttribute('data-key');
            console.log(index);
            li.remove(); 
            texts.splice(index - 1, 1); // удаляются все элементы ниже удаляемого
        });
    });

    if(this.dataset.mode == 'update') {

        let spans = Array.from(notes.querySelectorAll('.open'));
        
        let index;

        spans.forEach(item => {
            if(item.matches('span.active')) {
                index = item.dataset.key; 
            }
        });
        texts[index - 1] = textarea.value;
        textarea.value = ''; 
        
        this.dataset.mode = 'create';
        changeMode.textContent = 'Режим создания новой записи';
    }
 });

btnChangeMode.addEventListener('click', function() {
    if(btnSave.dataset.mode == 'create'){
        btnSave.dataset.mode = 'update';
        changeMode.textContent = 'Режим редактирования';
    } else if(btnSave.dataset.mode == 'update') {
        btnSave.dataset.mode = 'create';
        changeMode.textContent = 'Режим создания новой записи';
    }
});
