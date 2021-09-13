document.addEventListener('DOMContentLoaded', () => {
  const label = document.querySelectorAll('.sub-filter__element');
  // Получим все родительские элементы в фильтре
  const sidebarAccordeon = document.querySelectorAll('.filter-parent-item .filter__panel');
  const accordeonFunction = function() {
    this.parentNode.querySelector('.sub-filter').classList.toggle('show');
    this.querySelector('.pointer').classList.toggle('rotate');
  }
  // Отслеживаем клики родительских пунктов фильтра
  for (i = 0; i < sidebarAccordeon.length; i++) {
    sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
  }


//   const myLabel = function() {
//     let myChecbox = this.querySelector('label input')
//
//     if (myChecbox.checked){
//         myChecbox.checked = false
//         console.log(myChecbox)
//     } else if(!myChecbox.checked) {
//         myChecbox.checked = true
//         console.log(myChecbox)
//     }
//
//     // if (!myChecbox.checked){
//     //   myChecbox.checked = true
//     //   console.log('поставил')
//     // } else {
//     //   myChecbox.checked = false
//     //   console.log('снял')
//     // }
//
//
// }
//   for (i = 0; i< label.length; i++){
//     label[i].addEventListener('click', myLabel, false)
//   }
});
