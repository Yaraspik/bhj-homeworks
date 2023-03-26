class Card {
    constructor(container) {
        this.container = container;
        this.setBehaviorOfCheckboxes();
    }

    setBehaviorOfCheckboxes() {
        const checkboxes = Array.from(this.container.querySelectorAll('.interest__check'));

        checkboxes.forEach(element => {
            element.addEventListener('click', this.checkChildCheckboxes);
        });
    }

    checkChildCheckboxes(event) {
        let checkBoxListLocated = event.target.closest('li');
        
            if(event.target.checked == true){
                Array.from(checkBoxListLocated.querySelectorAll('.interest__check')).forEach(element => {
                    if(element.closest('ul').closest('li') === checkBoxListLocated.closest('li')) {
                        element.checked = true;
                    }
                });
            } else {
                Array.from(checkBoxListLocated.querySelectorAll('.interest__check')).forEach(element => {
                    element.checked = false;
            });
        }
    }
}

let card = new Card(document.querySelector('.card'));