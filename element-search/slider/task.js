const slidesList = document.getElementsByClassName('slider__item');
const dotsList = document.getElementsByClassName('slider__dot');

document.querySelector('.slider__arrow_next').addEventListener('click', nextSlide);
document.querySelector('.slider__arrow_prev').addEventListener('click', prevSlide);
Array.from(dotsList).forEach(element => {
    element.addEventListener('click', dotSlider);
});

activateDotSlider();

function activateDotSlider(){
    let activeDot = document.querySelector('.slider__dot_active');
    for (let i = 0; i < slidesList.length; i++) {
        if(activeDot){
            activeDot.classList.remove('slider__dot_active');
        }
        if(slidesList[i].classList.contains('slider__item_active')){
            return dotsList[i].classList.add('slider__dot_active');
        }
    }
}

function activateSlide(slide, direction){
    document.querySelector('.slider__item_active').classList.remove('slider__item_active');

    (slide) ? slide.classList.add('slider__item_active') : false;

    (direction == 'last') ? slidesList[slidesList.length - 1].classList.add('slider__item_active') : false;

    (direction == 'first') ? slidesList[0].classList.add('slider__item_active') : false;

    activateDotSlider();
}

function prevSlide() {
    let prevSlide = document.querySelector('.slider__item_active').previousElementSibling;
    if(prevSlide){
        activateSlide(prevSlide);
    } else {
        activateSlide(prevSlide, 'last');
    }
}

function nextSlide(){
    let nextSlide = document.querySelector('.slider__item_active').nextElementSibling;
    if(nextSlide){
        activateSlide(nextSlide);
    } else {
        activateSlide(nextSlide, 'first');
    }
}

function dotSlider(){
    document.querySelector('.slider__dot_active').classList.remove('slider__dot_active');
    this.classList.add('slider__dot_active');
    for (let i = 0; i < dotsList.length; i++) {
        if(dotsList[i].classList.contains('slider__dot_active')){
            document.querySelector('.slider__item_active').classList.remove('slider__item_active');
            return slidesList[i].classList.add('slider__item_active');
        }
    }
}