Array.from(document.querySelectorAll('.menu__link')).forEach(element => {
    element.addEventListener('click', openSubMenu);
});

function openSubMenu(event){
    if(this.nextElementSibling) {
        event.preventDefault();

        if(this.nextElementSibling.classList.contains('menu_active')){
            return this.nextElementSibling.classList.remove('menu_active');
        }

        Array.from(document.querySelectorAll('.menu_sub')).forEach(element => {
            if(element.closest('body > .menu') === this.closest('body > .menu')){
                element.classList.remove('menu_active');
            }
        });
        
        this.nextElementSibling.classList.add('menu_active');
    }
}