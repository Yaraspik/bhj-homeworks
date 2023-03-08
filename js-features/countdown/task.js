const timer = document.getElementById('timer');
let timerValue = timer.textContent.split(":");

let h = Number(timerValue[0]) * 3600000;
let m = Number(timerValue[1]) * 60000;
let s = Number(timerValue[2]) * 1000;

const target = new Date(new Date().getTime() + h + m + s);

function countDown(){
    let  remains = (target - new Date()) % 86400000;
    console.log(remains);
    if(remains <= 0) {
        clearInterval(timerId);
        return (document.getElementById('forClick').click())
    }

    h = Math.floor(remains / 3600000);
    m = Math.floor((remains % 3600000) / 60000);
    s = Math.floor(((remains % 3600000) % 60000) / 1000);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    timer.textContent = `${h}:${m}:${s}`;
}

let timerId = setInterval(countDown, 1000);