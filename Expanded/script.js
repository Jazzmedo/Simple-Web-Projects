var divs = document.querySelectorAll('.con');

function handleClick(event) {
    divs.forEach(function (div) {
        div.classList.remove('clicked');
    });

    event.target.classList.add('clicked');
}

divs.forEach(function (div) {
    div.addEventListener('click', handleClick);
});