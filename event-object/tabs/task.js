let arTabs = Array.from(document.querySelectorAll('.tab'));
let arTabsContent = Array.from(document.querySelectorAll('.tab__content'));


function Activatetab(index) {
    return event => {
        arTabs.forEach(element => {
            if(element.classList.contains('tab_active') && element.closest('.tabs') == event.target.closest('.tabs')){
                element.classList.remove('tab_active');
            }
        });
        
        arTabsContent.forEach(element => {
            if(element.classList.contains('tab__content_active') && element.closest('.tabs') == event.target.closest('.tabs')){
                element.classList.remove('tab__content_active');
            }
        });

        arTabs[index].classList.add('tab_active');
        arTabsContent[index].classList.add('tab__content_active');
    }
}

arTabs.forEach((element, index) => {
    element.addEventListener('click', Activatetab(index));
});