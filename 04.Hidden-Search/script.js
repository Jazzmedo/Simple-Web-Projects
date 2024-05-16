document.querySelector('.fa-search').addEventListener('click', () => {
    var testt= document.getElementsByTagName('input');
    console.log(testt[0]);
    testt[0].classList.toggle('onn');
    document.querySelector('.fa-search').classList.toggle('hover');
});

