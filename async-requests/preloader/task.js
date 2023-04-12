const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const valute = localStorage.getItem('valute');

function showValuteList(valuteList) {
    Object.keys(valuteList).forEach(el => {
        items.insertAdjacentHTML(
            'afterbegin',
            `<div class="item">
                <div class="item__code">
                    ${valuteList[el].CharCode}
                </div>
                <div class="item__value">
                    ${valuteList[el].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
        );
    });
}

if(valute) {
    const cashedValute = JSON.parse(valute).response.Valute;
    showValuteList(cashedValute);
}

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.toggle('loader_active');
        const valute = JSON.parse(xhr.responseText).response.Valute;
        items.innerHTML = '';
        showValuteList(valute)
        localStorage.setItem('valute', xhr.responseText);
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();