function setValueToLocalStorage() {
    let timeoutId = null;
    return () => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
    
        timeoutId = setTimeout(() => {
            localStorage.editorValue = editor.value;
        }, 2000);
    }
}

let editor = document.getElementById('editor');
let cleaner = document.getElementById('cleaner');

editor.value = localStorage.editorValue;

editor.addEventListener('input', setValueToLocalStorage());

cleaner.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorValue');
})