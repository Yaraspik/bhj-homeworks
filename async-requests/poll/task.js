const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function setControlBtn(data) {
    const btn = document.querySelectorAll('.poll__answer');
    btn.forEach(el => {
        el.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            alert('Спасибо, ваш голос засчитан!');
            getResult(data.id, index);
        })
    });
}

function showPoll(data) {
    pollTitle.innerText = data.data.title;
    data.data.answers.forEach((el, index) => {
        pollAnswers.insertAdjacentHTML(
            'afterbegin',
            `<button class="poll__answer" data-index=${index}>
            ${el}
            </button>`
        );
    });
    setControlBtn(data);
}

function getResult(vote, answer) {
    const xhr = new XMLHttpRequest();
    xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send( `vote=${vote}&answer=${answer}` );
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            pollAnswers.textContent = '';
            const allAnswers = data.stat.reduce((acc, item, index) => {
                let answer = item.votes;
                acc += answer;
                return acc;
            }, 0);
            data.stat.forEach( (element) => {
                let percent = (element.votes / allAnswers * 100).toFixed(2);
                pollAnswers.insertAdjacentHTML('afterbegin', `<div>${element.answer} ${percent} %</div>`)
            });
        }
    });
}

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText);
        showPoll(data);
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();