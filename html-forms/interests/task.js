class Card {
    constructor(container) {
        this.container = container;
        this.checkboxes = this.container.querySelectorAll('.interest__check');

        this.setBehaviorOfCheckboxes();
    }

    setBehaviorOfCheckboxes() {
        this.checkboxes.forEach(element => {
            element.addEventListener('click', this.click);
        });
    }

    click(e) {
        const element = e.target;
        card.setChild(element);
        card.setParent(element);
    }

    setChild(element) {
        const checked = element.checked;
        const currentList = element.closest('.interest');
        const childCheckboxes = currentList.querySelectorAll('.interest__check');
        childCheckboxes.forEach(el => {
            el.checked = checked;
        })
    }

    setParent(element) {
        const parentList = element.closest('.interests').closest('.interest');
        
        if(!parentList) {
            return;
        }
        
        const currentList = element.closest('.interests');
        const quantityCheckboxes = currentList.querySelectorAll('.interest__check').length;
        const quantityCheckedCheckboxes = currentList.querySelectorAll('.interest__check:checked').length;
        const mainCheckbox = parentList.querySelector('.interest__check');

        if(quantityCheckboxes == quantityCheckedCheckboxes) {
            mainCheckbox.indeterminate = false;
            mainCheckbox.checked = true;
        }

        if(quantityCheckedCheckboxes == 0) {
            mainCheckbox.indeterminate = false;
            mainCheckbox.checked = false;
        }

        if(quantityCheckedCheckboxes > 0 && quantityCheckedCheckboxes < quantityCheckboxes) {
            mainCheckbox.indeterminate = true;
        }
        
        card.setParent(mainCheckbox);
    }
}

let card = new Card(document.querySelector('.card'));