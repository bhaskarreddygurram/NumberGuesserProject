let min = 1;
    max = 10;
    winningNum = getwinningnumber(min, max);
    guessesleft = 3;


 // UI elements
 const game = document.getElementById('#game'),
        g = document.getElementById('g');
       minNUm = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessBtn = document.querySelector('#guess-btn'),
       guessInput = document.querySelector('#guess-input'),
       message = document.querySelector('.message');  

console.log(g);
console.log(guessInput);
    //Assign UI min and max
minNUm.textContent = min;
maxNum.textContent= max;

//play again event listner
g.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

console.log(minNUm, maxNum);

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate
  if ( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }
    //check if won
    if(guess === winningNum){
      gameover(true,`wow ${winningNum} is correct, YOU WON! Congratulations!!!!!!!`);
     /* guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage(` wow ${winningNum} is correct, YOU WON! Congratulations!!!!!!!`, 'green'); */

    }else{
           guessesleft -= 1;
      if (guessesleft === 0){
        gameover(false, `NO correct number is ${winningNum} , YOU LOST It Dude! !!!!!!!`);
        /* guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        setMessage(` Lost, correct number was ${winningNum} `, 'red'); */

           } else{
        guessInput.style.borderColor = 'blue';
        setMessage(`${guess} is not correct ${guessesleft} guessesleft`,'blue');
           }

    }
}); 



function gameover(won ,msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  //play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getwinningnumber(min, max){
  let ran = Math.floor(Math.random()*(max-min+1)+min);
  return ran;
}

function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
}