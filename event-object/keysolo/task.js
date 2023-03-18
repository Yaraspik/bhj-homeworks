class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');
    this.numberTimer = 0;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keydown', e => {
      if (!e.code.startsWith('Key') || e.repeat == true) {
        return;
      }

      if (e.key.toUpperCase() === this.currentSymbol.textContent.toUpperCase()) {
        this.success();
      } else {
        this.fail();
      }
    })
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    clearTimeout(this.numberTimer);
    this.setTimer(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  setTimer(word) {
    let timerValue = word.length;
    this.timer.textContent = timerValue;
    
    this.numberTimer = setInterval(() => {
      timerValue -= 1;
      if(timerValue <= 0) {
        clearTimeout(this.numberTimer);
        this.fail();
        this.setNewWord();
        return;
      }
      this.timer.textContent = timerValue;
    }, 1000);
  }
}

new Game(document.getElementById('game'))