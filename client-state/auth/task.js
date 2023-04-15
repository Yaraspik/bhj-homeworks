const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const welcomeUserId = document.getElementById('user_id');
const unsinginBtn = document.getElementById('unsignin__btn');


if(localStorage.userId) {
    signinForm.textContent = '';
    welcome.classList.add('welcome_active');
    welcomeUserId.textContent = localStorage.userId;
}

signinForm.addEventListener('submit', e => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        if(xhr.status > 200 && xhr.status < 300) {
            let response = JSON.parse(xhr.responseText);
            let userId = response.user_id;

            if(response.success == false) {
                alert('Неверный логин/пароль');
                signinForm.reset();
            }

            if(userId && response.success == true) {
                localStorage.userId = JSON.stringify(response.user_id);
                signinForm.textContent = '';
                welcome.classList.add('welcome_active');
                welcomeUserId.textContent = userId;
            }
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    let formData = new FormData(signinForm);

    xhr.send(formData);
});

unsinginBtn.addEventListener('click', () => {
    localStorage.removeItem('userId');
    location.reload();
})