document.getElementById('modal_main').classList.add('modal_active');

Array.from(document.getElementsByClassName('modal__close')).forEach(element => {
    element.addEventListener('click', () => {
        Array.from(document.getElementsByClassName('modal_active')).forEach(element =>
            element.classList.remove('modal_active')
        );
    });
});

Array.from(document.getElementsByClassName('show-success')).forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById('modal_success').classList.add('modal_active');
    });
});