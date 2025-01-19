// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = Math.floor(Math.random()*20+1);
// let guess = document.querySelector('.number').textContent;
// let istrue=false;
// document.getElementsByClassName("btn check").onclick = function(){
//     if(guess === document.getElementsByClassName("btn check").textContent){
//         istrue = true;
//     }
// }
// let score=0;
// while(istrue){
//     document.getElementsByClassName("score").textContent =(score+=guess);
//     document.querySelector('.number').textContent = Math.random()*20+1;
//     let guess = document.querySelector('.number').textContent;
// }
'use strict';
console.log(document.querySelector('.message').textContent);
let guess = Math.trunc(Math.random()*20)+1;
let highScore=0;
let score=20;
document.querySelector('.check').addEventListener('click' , function(){
    let check = Number(document.querySelector('.guess').value);
    if(!check){
        document.querySelector('.message').textContent='Enter a number between 1 and 20';
     }
     else if(check===guess){
             document.querySelector('.message').textContent='You guessed it correct!';
             document.body.style.backgroundColor= '#60b347';
             document.querySelector('.number').textContent = guess;
             document.querySelector('.score').textContent=score;
             if(score>highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
             }
             document.querySelector('.guess').disabled = true;
             document.querySelector('.check').disabled = true;
}
     else{
        document.querySelector('.message').textContent = check < guess ? 'You guessed less!' : 'You guessed more!';
        score--;
        document.querySelector('.score').textContent=score;
        if(score<=0){
            document.querySelector('.message').textContent = check < guess ?
            'You guessed less! You lost the game!' : 'You guessed more! You lost the game!';
            document.querySelector('.score').textContent='0';
            document.body.style.backgroundColor='#ff0000';
            document.querySelector('.guess').disabled=true;
            document.querySelector('.check').disabled=true;
         }
     }
}
)
document.querySelector('.again').addEventListener('click' ,function(){
    score = 20;
    guess = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing...';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').disabled=false;
    document.querySelector('.check').disabled=false;
})
    