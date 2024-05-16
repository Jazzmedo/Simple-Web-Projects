document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
    const container = document.querySelector('body div');
    const i = document.querySelectorAll('li');
    i.forEach(li => li.classList.toggle('show'));
    container.classList.toggle('rotated');
    });
});

