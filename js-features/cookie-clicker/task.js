let clickerCounter = 0;
let previouslyClick = 0;

function addClickerCounter(){
    const start = new Date().getTime();
    if(previouslyClick) {
        document.getElementById('clicker__speed-counter').textContent = (1 / ((start - previouslyClick) / 1000)).toFixed(2);
    }
    previouslyClick = start;

    clickerCounter += 1;

    document.getElementById('clicker__counter').textContent = clickerCounter;
    document.getElementById('cookie').width = 250;
    setTimeout(() => document.getElementById('cookie').width = 200, 125);
}

document.getElementById('cookie').addEventListener("click", addClickerCounter);