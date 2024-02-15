let min = 1,
    max = 10,
    winNum= randomnumber(min,max),
    guessLeft= 3;

const guessInput= document.querySelector('.number'),
    game=       document.querySelector('.container'),
    guessBtn=   document.querySelector('.validate'),
    message =   document.querySelector('.message'),
    maxNum = document.querySelector('.max-num');

guessBtn.addEventListener('click', ()=>{
   let guess=  +(guessInput.value);
    if(isNaN(guess)|| guess<min || guess>max){
        setMessage(`${guess} is not a valid number`,'red')
    }
    if(guess== winNum){
        gameOver(true, `${winNum} is correct, You Won!`)
    }else{
        if(guessLeft===0){
            gameOver(false, `You lost, ${winNum} is the Wininng number`)
        }else{
            guessLeft= guessLeft-1
            guessInput.value= ""
            setMessage(`${guess} is incorrect, ${guessLeft} guess left`,'red')
        }
    }
})
game.addEventListener('mousedown',(e)=>{
    if(e.target.id == 'play-again'){
        window.location.reload()
    }
})
function setMessage(msg,color){
    message.style.color= color;
    message.textContent= msg;
}
function gameOver(won,msg){
    let color;
    won === true? color= 'green': color= 'red';
    guessInput.disabled= true;
    guessInput.style.borderColor= color;
    setMessage(msg, color);
    guessBtn.value= "Play Again";
    guessBtn.id += "play-again"
}
function randomnumber(min, max){
   return(Math.ceil(Math.random()*(max-min+1)))
}