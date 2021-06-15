$(document).ready(function () {
  $('.slider').slick({
  });
})

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});

window.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.header__title'),
    content = elem.innerText,
    intervalSpeed = 60;
  elem.innerText = '';

  var indexLetter = 0;

  var interval = setInterval(function () {
    if (indexLetter >= content.length) clearInterval(interval);
    elem.innerHTML += content.charAt(indexLetter);
    indexLetter++;
  }, intervalSpeed)
});
