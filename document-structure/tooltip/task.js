let elWithTooltip = [...document.querySelectorAll('.has-tooltip')];

elWithTooltip.forEach(el => {
    el.insertAdjacentHTML('afterend', `<div class="tooltip" data-position="top">${el.getAttribute('title')}</div>`);
});

elWithTooltip.forEach(el => {
    el.addEventListener('click', showTooltip);
});

function showTooltip(e) {
    e.preventDefault();

    const tooltipActive = document.querySelector('.tooltip_active');
    const tooltip = e.target.nextElementSibling;
    
    if(tooltipActive && tooltipActive != tooltip) {
        tooltipActive.classList.remove('tooltip_active');
    }
    
    tooltip.classList.toggle('tooltip_active');
    tooltip.style.position = 'absolute';
    
    const { top, right, left } = e.target.getBoundingClientRect();
    const { width, height} = tooltip.getBoundingClientRect();

    

    if(tooltip.dataset.position == "left") {
        tooltip.style.left = (left - width) + 'px';
        tooltip.style.top = top + 'px';
    }

    if(tooltip.dataset.position == "bottom") {
        e.target.nextElementSibling.style.left = left + 'px';
    }

    if(tooltip.dataset.position == "right") {
        e.target.nextElementSibling.style.left = right + 'px';
        tooltip.style.top = top + 'px';
    }   

    if(tooltip.dataset.position == "top") {
        e.target.nextElementSibling.style.left = left + 'px';
        e.target.nextElementSibling.style.top = (top - height) + 'px';
    }  

}