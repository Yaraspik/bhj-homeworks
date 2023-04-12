const progress = document.getElementById('progress');
const form = document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
        console.log(e.loaded)
        console.log(e.total)
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms.form);

    xhr.send(formData);
})