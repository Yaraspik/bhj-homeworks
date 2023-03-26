class ChatGPT {
    constructor(chatWidget) {
        this.chatWidget = chatWidget;
        this.chatWidgetSide = this.chatWidget.querySelector('.chat-widget__side');
        this.messages = this.chatWidget.querySelector('.chat-widget__messages');
        this.chatWindow = this.chatWidget.querySelector('.chat-widget__area');
        this.timerForColdQuestion = null;

        this.setShowChatWindow();
        this.setSendMessage();
    }

    setShowChatWindow() {
        this.chatWidgetSide.addEventListener('click', () => {
            this.chatWidget.classList.add('chat-widget_active');
        })

        this.coldQuestion();
    }

    setSendMessage() {
        const input = this.chatWidget.querySelector('.chat-widget__input');

        input.addEventListener('keydown', (event) => {
            let inputValue = input.value;
            let currentTime = this.getCurrentTime();

            if(!inputValue) {
                return;
            }
            
            if(event.key == "Enter") {
                this.messages.insertAdjacentHTML('beforeend', 
                    `<div class="message message_client">
                        <div class="message__time">${currentTime}</div>
                        <div class="message__text">${inputValue}</div>
                    </div>`
                );

                input.value = '';

                this.sendAnswer();
                this.scrollChat();
                this.coldQuestion();
            } 
        });

    }

    getCurrentTime() {
        let date = new Date;
        let hours = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
        return `${hours}:${minutes}`;
    }

    sendAnswer() {
        let answer = this.getAnswer();
        let currentTime = this.getCurrentTime();

        this.messages.insertAdjacentHTML('beforeend', 
                    `<div class="message">
                        <div class="message__time">${currentTime}</div>
                        <div class="message__text">${answer}</div>
                    </div>`
                );
    }

    getAnswer() {
        const arAnswers = [
            "Добрый день",
            "Какой у Вас вопрос?",
            "Обращайтесь, если потребуется",
            "Конечно",
            "Возможно"
        ]

        let index = Math.floor(Math.random() * arAnswers.length);

        return arAnswers[index];
    }

    scrollChat() {
        this.messages.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    coldQuestion() {
        let coldQuestion = 'Вы еще здесь?';
        let currentTime = this.getCurrentTime();

        if(this.timerForColdQuestion) {
            clearTimeout(this.timerForColdQuestion);
        }

        this.timerForColdQuestion = setTimeout(() => {
            this.messages.insertAdjacentHTML('beforeend', 
                    `<div class="message">
                        <div class="message__time">${currentTime}</div>
                        <div class="message__text">${coldQuestion}</div>
                    </div>`
            );
            this.scrollChat();
        }, 30000);
    }

}

const chat = new ChatGPT(document.querySelector('.chat-widget'));