class Ad {
    constructor(container) {
        this.container = container;
        this.rotator = this.container.querySelector('.rotator');
        this.arRotatorCases = Array.from(this.rotator.querySelectorAll('.rotator__case'));
        this.intervalId = null;

        this.setCaseColorFromDateAttribute();
        this.changeAd();
    }

    changeAd() {
        let activeCase = this.rotator.querySelector('.rotator__case_active');
        let speedChangeCases = activeCase.dataset.speed;

        this.intervalId = setInterval( () => {
            if(activeCase.nextElementSibling) {
                activeCase.classList.toggle('rotator__case_active');
                activeCase.nextElementSibling.classList.toggle('rotator__case_active');
                activeCase = activeCase.nextElementSibling;
            } else {
                activeCase.classList.toggle('rotator__case_active');
                this.arRotatorCases[0].classList.toggle('rotator__case_active');
                activeCase = this.arRotatorCases[0];
            }

            clearInterval(this.intervalId);
            this.changeAd();

        }, speedChangeCases);
    }

    setCaseColorFromDateAttribute() {
        this.arRotatorCases.forEach(element => {
            let caseColor = element.dataset.color;
            element.style.setProperty('--color', caseColor); 
        })
    }
}

let ad = new Ad(document.querySelector('.card'));
let ad2 = new Ad(document.querySelector('.card2'));