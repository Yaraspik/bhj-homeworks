function activateList() {
    Array.from(document.querySelectorAll('.dropdown__list')).forEach(element => {
        if(element.closest('.card') == this.closest('.card')){
        element.classList.contains('dropdown__list_active') ? element.classList.remove('dropdown__list_active') : element.classList.add('dropdown__list_active');
        }
    });
}

function deactivateList(event) {
    event.preventDefault();
    
    if(event.target.closest('.dropdown').classList.contains('dropdown__list_active')){
        event.target.closest('.dropdown').classList.remove('dropdown__list_active');
    }

    Array.from(document.querySelectorAll('.dropdown__value')).forEach(element => {
        if(element.closest('.card') == this.closest('.card')){
            element.textContent = event.target.textContent;
        }
    });  
}

Array.from(document.querySelectorAll('.dropdown')).forEach(element => {
    element.addEventListener('click', activateList);
});

Array.from(document.querySelectorAll('.dropdown__item')).forEach(element => {
    element.addEventListener('click', deactivateList);
});