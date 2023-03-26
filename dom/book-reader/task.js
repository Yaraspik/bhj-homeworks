class Reader {
    constructor(book) {
        this.book = book;
        this.bookProperties = this.book.classList;
        this.controllerFontSize = book.querySelector('.book__control_font-size');
        this.controllerFontColor = book.querySelector('.book__control_color');
        this.controllerBackgroundColor = book.querySelector('.book__control_background');

        this.setFontSizeChanger();
        this.setFontColorChanger();
        this.setBackgroundColorChanger();
    }

    setFontSizeChanger() {
        Array.from(this.controllerFontSize.querySelectorAll('.font-size')).forEach(element => {
            element.addEventListener('click', setFontSize.bind(this));
        });

        function setFontSize(event) {
            event.preventDefault();
            let bookSize = this.bookProperties;
            let itemControllerFontSize = this.controllerFontSize;
            let size = event.target.dataset.size;

            Array.from(bookSize).forEach(el => {
                if(el.startsWith('book_fs-')) {
                    bookSize.remove(el);
                }
            });

            (size) ? bookSize.add('book_fs-' + size) : false;

            itemControllerFontSize.querySelector('.font-size_active').classList.toggle('font-size_active');
            event.target.classList.toggle('font-size_active');
        }
    }

    setFontColorChanger() {
        Array.from(this.controllerFontColor.querySelectorAll('.color')).forEach(element => {
            element.addEventListener('click', setFontColor.bind(this));
        });

        function setFontColor(event) {
            event.preventDefault();
            let bookFontColor = this.bookProperties;
            let itemControllerFontColor = this.controllerFontColor;
            let textColor = event.target.dataset.textColor;

            Array.from(bookFontColor).forEach(el => {
                if(el.startsWith('book_color-')) {
                    bookFontColor.remove(el);
                }
            });

            (textColor) ? bookFontColor.add('book_color-' + textColor) : false;

            itemControllerFontColor.querySelector('.color_active').classList.toggle('color_active');
            event.target.classList.toggle('color_active');
        }
    }

    setBackgroundColorChanger() {
        Array.from(this.controllerBackgroundColor.querySelectorAll('.color')).forEach(element => {
            element.addEventListener('click', setBackgroundColor.bind(this));
        });

        function setBackgroundColor(event) {
            event.preventDefault();
            let bookBackgroundColor = this.bookProperties;
            let itemcontrollerBackgroundColor = this.controllerBackgroundColor;
            let bgColor = event.target.dataset.bgColor;

            Array.from(bookBackgroundColor).forEach(el => {
                if(el.startsWith('book_bg-')) {
                    bookBackgroundColor.remove(el);
                }
            });

            (bgColor) ? bookBackgroundColor.add('book_bg-' + bgColor) : false;
            

            itemcontrollerBackgroundColor.querySelector('.color_active').classList.toggle('color_active');
            event.target.classList.toggle('color_active');
        }
    }
}

const reader = new Reader(document.getElementById('book'));