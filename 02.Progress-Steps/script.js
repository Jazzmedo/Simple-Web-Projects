var hrr = document.querySelectorAll('hr');
var cons = document.querySelectorAll('.con');


var back = document.querySelector('.btn.back');
var front = document.querySelector('.btn.front');
back.addEventListener('click', backClick);
front.addEventListener('click', frontClick);

var act = 0

function updatee() {
    if (act == 0) {
        back.classList.remove('actbtn');
        back.setAttribute('disabled', "");
        front.classList.add('actbtn');
        front.removeAttribute('disabled');
    }
    else if (act > 0 && act < 3) {
        back.classList.add('actbtn');
        front.classList.add('actbtn');
        front.removeAttribute('disabled');
        back.removeAttribute('disabled');
    }
    if (act == 3) {
        back.removeAttribute('disabled');
        front.setAttribute('disabled', "");
        front.classList.remove('actbtn');
        back.classList.add('actbtn');
    }
}

function backClick() {
    act--;
    hrr[act].classList.remove('actlin');
    cons[act + 1].classList.remove('actcon');
    console.log(act);
    updatee();
}

function frontClick() {
    hrr[act].classList.add('actlin');
    cons[act + 1].classList.add('actcon');
    act++;
    console.log(act);
    updatee();
}
