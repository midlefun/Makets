document.addEventListener('DOMContentLoaded', () => {

// Получим все родительские элементы в меню
const sidebarAccordeon = document.querySelectorAll('.menu-parent-item');
const accordeonFunction =  function() {
this.parentNode.querySelector('.sub-menu').classList.toggle('show');
this.querySelector('.pointer').classList.toggle('rotate');
}
// Отслеживаем клики родительских пунктов меню
for( i=0; i < sidebarAccordeon.length; i++ ){
sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
}
});
