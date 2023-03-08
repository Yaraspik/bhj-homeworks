let dead = 0;
let lost = 0;
let previouslyEl = 0;

function isHit(){
    if(previouslyEl === this.id) {
        return;
    }

    if(this.classList.contains('hole_has-mole')) {
        document.getElementById('dead').textContent = (dead += 1);
    } else {
        document.getElementById('lost').textContent = (lost += 1);
    }

    if(dead == 10 || lost == 5) {
        dead == 10 ? alert('You win') : alert("You lose");
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = 0;
        document.getElementById('lost').textContent = 0;
    }

    previouslyEl = this.id;
}

for (let i = 1; i < 10; i++) {
    document.getElementById(`hole${i}`).addEventListener('click', isHit);
}