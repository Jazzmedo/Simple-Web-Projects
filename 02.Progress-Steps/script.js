var cons = document.querySelectorAll('.con');
var prog=document.getElementById('progress');

console.log(prog);

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
        prog.style.width="0%";
    }
    else if (act > 0 && act < 3) {
        if(act==1){
            prog.style.width="33%";
        }
        else if(act==2){
            prog.style.width="66%";
        }
        back.classList.add('actbtn');
        front.classList.add('actbtn');
        front.removeAttribute('disabled');
        back.removeAttribute('disabled');
    }
    if (act == 3) {
        prog.style.width="100%";
        back.removeAttribute('disabled');
        front.setAttribute('disabled', "");
        front.classList.remove('actbtn');
        back.classList.add('actbtn');
    }
}

function backClick() {
    act--;
    cons[act + 1].classList.remove('actcon');
    updatee();
}

function frontClick() {
    cons[act + 1].classList.add('actcon');
    act++;
    updatee();
}
