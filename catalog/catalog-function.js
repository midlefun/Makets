document.addEventListener('DOMContentLoaded', () => {

// Получим все родительские элементы в фильтре
const sidebarAccordeon = document.querySelectorAll('.menu-parent-item .filter__panel');
const accordeonFunction =  function() {
this.parentNode.querySelector('.sub-menu').classList.toggle('show');
this.querySelector('.pointer').classList.toggle('rotate');
}
// Отслеживаем клики родительских пунктов фильтра
for( i=0; i < sidebarAccordeon.length; i++ ){
sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
}
});
