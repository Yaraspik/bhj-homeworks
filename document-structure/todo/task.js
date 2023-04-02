class Todo {
    constructor(container) {
        this.container = container;
        this.button = container.querySelector('.tasks__add');
        this.input = container.querySelector('.tasks__input');
        this.list = container.querySelector('.tasks__list');

        this.setBehaviour();
    }

    setBehaviour() {
        this.button.addEventListener('click', this.addTask.bind(this));
    }

    addTask() {
        if(!this.input.value) {
            return;
        }

        this.list.insertAdjacentHTML(
            'beforeend',
            `<div class="task">
                <div class="task__title">
                ${this.input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        );

        const taskTitles = this.list.querySelectorAll('.task__title');
        taskTitles.forEach(element => {
            if(element.innerText == this.input.value) {
                element.nextElementSibling.addEventListener('click', this.removeTask);
            }
        });
         
        this.input.value = '';
    }

    removeTask(event) {
        event.target.parentElement.remove();
    }
}

const todo = new Todo(document.querySelector('.tasks'));