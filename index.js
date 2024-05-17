const score = parseInt((Math.random()*100)+1);
const submit = document.querySelector('button');

submit.addEventListener('click',function (){
    document.querySelector('.pScore').innerHTML = score;
})

