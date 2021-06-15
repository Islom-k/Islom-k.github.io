window.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.head_txt'),
        content = elem.innerText,
        intervalSpeed = 60;
    elem.innerText = '';

    var indexLetter = 0;

    var interval = setInterval(function() {
        if (indexLetter >= content.length) clearInterval(interval);
        elem.innerHTML += content.charAt(indexLetter);
        indexLetter++;
    }, intervalSpeed)
});

