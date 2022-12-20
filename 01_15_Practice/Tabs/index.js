'use strict';

// Сейчас мы реализуем вкладки. Очевидно, что нужно как-то связать ссылки с соответствующими им вкладками.
// В данном случае я предлагаю связать ссылки и вкладки просто по позиции: первая ссылка будет открывать первую вкладку, вторая ссылка - вторую вкладку и так далее.
// Общий алгоритм будет выглядеть так: по нажатию на кнопку мы должны найти ссылку с классом и убрать ей этот класс. Аналогичным образом мы должны найти вкладку с этим классом и тоже убрать ей этот класс.
// Затем мы должны взять ссылку, на которую был клик и активировать ее. Затем мы должны взять вкладку, которая имеет такой же номер, как и наша ссылка - и тоже активировать ее.
// №1 ⊗jsPrStTbs
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.

const links = document.querySelectorAll('a');
const tabs = document.querySelectorAll('.tab');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        let linkActive = document.querySelector('a.active');
        let tabActive = document.querySelector('.tab.active');
        linkActive.classList.remove('active');
        links[i].classList.add('active');
        tabActive.classList.remove('active');
        tabs[i].classList.add('active');
    });
}