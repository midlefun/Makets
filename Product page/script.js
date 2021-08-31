

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      let headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

// console.log(ul.css('height'));

let ul = $('.dotted');
let height = $('.dotted').height();
document.querySelector('.dotted').style.height = '60px';
$('.button_hide span').on('click', function() {
    if (ul.css('height') == '60px') {
      $(this).text('Скрыть ↑');
      ul.animate({
        height: height + "px"
      }, 300);

    } else {
      $(this).text('Показать все ↓');
      ul.animate({
        height: "60px"
      }, 300);

    }
  })

window.onload = function() {
  const minus = document.querySelector('.cart_quantity_down');
  const plus = document.querySelector('.cart_quantity_up');
  let inputValue = document.querySelector('.cart_quantity_input');
  // const price
  // let sum
  const quantityPair  = document.querySelector('.values p span').textContent;
  let quantityPairTotal = document.getElementById('totalPars').textContent;

  plus.onclick = function (){
    inputValue.value++;
    quantityPairTotal.textContent = quantityPair.textContent * inputValue.value;
    alert(quantityPairTotal);
    // quantityPairTotal = quantityPair*inputValue.value;
    // sum.innerHtml = price.value
    return false
  }

  minus.onclick = function (){
    if (inputValue.value > 1) {
      inputValue.value--;
    }
    return false
  }
}
