const popup = document.getElementById('subscribe-modal');
const btn = document.querySelector('.modal__close_times');

btn.addEventListener('click', () => {
    setCookie("popup", 'Y');
    popup.classList.remove('modal_active');
})

if(getCookie("popup") != 'Y') {
    popup.classList.add('modal_active');
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));

    if(cookie) {
        return cookie.substring(name.length + 1);
    }
}

