
const submit = document.querySelector('button');
const firstName = document.querySelector('#inputName');
const secondName = document.querySelector('#input');

submit.addEventListener('click', function () {
    const score = parseInt((Math.random() * 100) + 1);
    document.querySelector('.pScore').innerHTML = score;
    firstName.value = "";
    secondName.value = "";
    
})

