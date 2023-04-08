class Card {
    constructor(container) {
        this.container = container;
        this.checkboxes = this.container.querySelectorAll('.interest__check');

        this.setBehaviorOfCheckboxes();
    }

    setBehaviorOfCheckboxes() {
        this.checkboxes.forEach(element => {
            element.addEventListener('click', this.check);
        });
    }

    check(event) {
        const checkBoxListLocated = event.target.closest('li');
        const lengthCurrentList = event.target.closest('ul').querySelectorAll('.interest__check').length;
        const selectedInterests  = event.target.closest('ul').querySelectorAll( '.interest__check:checked' ).length;
        const elParent = event.target.closest('ul .interests');
        const arCheckboxes = checkBoxListLocated.querySelectorAll('.interest__check');
        let parentCheckbox = '';

        if(event.target.closest('.interests').closest('.interest')) {
            parentCheckbox = event.target.closest('.interests').closest('.interest').querySelector('.interest__check');
        }
        
        if(event.target.checked == true){
            arCheckboxes.forEach(element => {
                if(element.closest('ul').closest('li') === checkBoxListLocated.closest('li')) {
                    element.checked = true;
                }
            });
            
            if(selectedInterests  > 0 && elParent) {
                card.allParents(event.target, true);
            }
            
            if(selectedInterests  == lengthCurrentList) {
                parentCheckbox.indeterminate = false;
                parentCheckbox.checked = true;
            }
        } else {
            arCheckboxes.forEach(element => {
                element.checked = false;
            });

            if(selectedInterests  != lengthCurrentList && elParent) {
                parentCheckbox.checked = false;
            }

            if(selectedInterests  == 0 && elParent || selectedInterests  > 0 && elParent) {
                card.allParents(event.target, false);
            }
        }
    }

    allParents(el, position) {
        let parent = el.closest('.interests').closest('.interest');
        if(parent){
            parent.querySelector('.interest__check').indeterminate = position;
            this.allParents(parent.querySelector('.interest__check'), position);
        } else {
            false;
        }
    }
}

let card = new Card(document.querySelector('.card'));