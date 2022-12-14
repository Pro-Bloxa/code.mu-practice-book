'use strict';

// Сейчас мы научимся делать спойлеры. Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.
// абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер
// В тексте, конечно же, может быть много спойлеров и у каждого должна быть своя ссылка
// Очевидно, что ссылку для разворачивания и сам спойлер надо как-то связать. Можно придумать различные варианты, но в данном случае я предлагаю сделать по местоположению: скажем, что ссылка с классом toggle открывает или закрывает элемент с классом spoiler, расположенный сразу под родителем этой ссылки.
// Пусть спойлер по умолчанию будет скрыт, а если мы хотим его показать - будем давать ему класс active.
// №1 ⊗jsPrStSpl
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.

const links = document.querySelectorAll('.toggle');

console.log(links);
for(let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let spoiler = link.closest('p').nextElementSibling;
        if(spoiler.matches('.spoiler')) {
            spoiler.classList.toggle('active');
        }
    });
}

