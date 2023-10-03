
//Get the elements from html to assigned variable.
const startButton = document.getElementById("button");
const numInput = document.getElementById("num-picked");
const counterDiv = document.getElementById("counter")
const diceContainer = document.getElementById("dice-container");
const gameOverDiv  = document.getElementById("game-over");
const instDiv = document.getElementById("instructions");
const bniDiv = document.getElementById("start-game");
const startDiv = document.getElementById("starter");
const counter = document.createElement("span");
const image = document.createElement("img");
const button = document.createElement("button");
const tryAgainButton = document.createElement("button");
let dice1;
let dice2;
const diceDiv1 = document.createElement("div");
const diceDiv2 = document.createElement("div");
const instList = document.getElementById("inst-list");


//function to get random number to random pick of dice.

function getDice() {

    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

//function for getting the correct image.
function getImg(dice){
//Getting the right image.
    if (dice == 1) {
        image.src = "dices/dice1.png"
    } else if (dice == 2) {
        image.src = "dices/dice2.png"
    }else if (dice == 3) {
        image.src = "dices/dice3.png"
    }else if (dice == 4) {
        image.src = "dices/dice4.png"
    }else if (dice == 5) {
        image.src = "dices/dice5.png"
    }else if (dice == 6) {
        image.src = "dices/dice6.png"
    }

    return image;
    
}

//Number that´ll be the counter.
let playNum = 0;

//function to start the game.
startButton.addEventListener("click", function() {
    
        if (numInput.value < 6) {
            alert("pick a number");
        } else { 

            startDiv.innerHTML = "";
            instDiv.innerHTML = "";
            instDiv.classList.remove("instructions");
            //Get the correct dices on the screen.

            dice1 = getDice();
            dice2 = getDice();

            let diceImg1 = getImg(dice1);
            let diceImg2 = getImg(dice2);

            diceImg1.classList.add("diceImg");
            diceImg2.classList.add("diceImg");

            diceDiv1.appendChild(diceImg1);
            diceDiv2.appendChild(diceImg2);

            diceContainer.appendChild(diceDiv1);
            diceContainer.appendChild(diceDiv2);

            //End the game if dice + dice = prepicked number.
            if(dice1 + dice2 == numInput.value) {
                gameOver();
            }

            // Get the number for the counter.
            playNum += dice1 + dice2;
            counter.innerHTML = playNum;
            counterDiv.appendChild(counter);
            
            //Create button for reroll.
            button.innerText = "REROLL";
            button.classList.add("button");
            counterDiv.classList.add("start");
            counterDiv.appendChild(button);
            
        }
})


//function to end the game.

function gameOver() {

    //Create the gameover text and append it to the div.
    const gameOverText = document.createElement("h2");
    gameOverText.innerText = "GAME OVER";
    gameOverDiv.appendChild(gameOverText);

    //Remove the diceimages.
    diceContainer.innerHTML = "";



    //Create score value.
    let score = document.createElement("h3");
    score.innerText = "Total score: " + playNum;
    gameOverDiv.appendChild(score);



    //Create try again button.

    tryAgainButton.innerHTML = "Try Again";
    tryAgainButton.classList.add("button");
    counterDiv.innerHTML= "";
    counterDiv.appendChild(tryAgainButton);


}

//function to get page back to the start.

//function for the reroll
button.addEventListener("click", function() {

    //Get the correct dices on the screen.
    dice1 = getDice();
    dice2 = getDice();

    let diceImg1 = getImg(dice1);
    let diceImg2 = getImg(dice2);

    diceImg1.classList.add("diceImg");
    diceImg2.classList.add("diceImg");
    diceDiv1.appendChild(diceImg1);
    diceDiv2.appendChild(diceImg2);

    diceContainer.appendChild(diceDiv1);
    diceContainer.appendChild(diceDiv2);

    //End the game if dice + dice = prepicked number.
    if(dice1 + dice2 == numInput.value) {
        gameOver();
    }
    
    playNum += dice1 + dice2;
    counter.innerHTML = playNum;
})


//function för att kunna starta om spelet via startsidan.
function resetGame() {

    //Resetta lite values
    numInput.value = "";
    playNum = 0;
    diceContainer.innerHTML = "";
    startDiv.innerHTML = "";
    counterDiv.innerHTML = "";
    gameOverDiv.innerHTML = "";

    //skapa elementen som ska instruera.
    const instHead = document.createElement("h2");
    instHead.innerText = "HOW TO PLAY";
    instDiv.appendChild(instHead);
    instDiv.appendChild(instList);
    instDiv.classList.add("instructions");

    const startHead = document.createElement("h2");
    startHead.innerText = "GIVE IT A TRY";
    const pickaNum = document.createElement("h3");
    pickaNum.innerText = "PICK A NUMBER BETWEEN 6 AND 9";

    startDiv.classList.add("start");
    startDiv.appendChild(startHead);
    startDiv.appendChild(pickaNum);
    startDiv.appendChild(bniDiv);

    bniDiv.classList.add("start-game");
    bniDiv.appendChild(numInput);
    bniDiv.appendChild(startButton);
    
}

tryAgainButton.addEventListener("click", function(){
    resetGame();
})