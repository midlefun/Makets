

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      let headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

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
