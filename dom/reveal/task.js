class RevealDriver {
    constructor(container) {
        this.container = container;
        this.blocks = [...document.querySelectorAll('.reveal')];

        this.currentScroll();
    }

    blockIsVisible(el) {
        const {top, bottom} = el.getBoundingClientRect();

        if(bottom < 0) {
            return false;
        }

        if(top > innerHeight) {
            return false;
        }

        el.classList.add('reveal_active');

    }

    currentScroll() {
        window.addEventListener('scroll', () => {
            this.blocks.forEach(element => {
                this.blockIsVisible(element);
            });
        })
    }

}

let revealDriver = new RevealDriver(document.body);