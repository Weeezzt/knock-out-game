
//Get the elements from html to assigned variable.
const startButton = document.getElementById("button");
const numInput = document.getElementById("num-picked");


const instDiv = document.getElementById("instructions");
const bniDiv = document.getElementById("start-game");
const startDiv = document.getElementById("starter");
const counter = document.getElementById("counter");

const image1 = document.getElementById("img-1");
const image2 = document.getElementById("img-2");
const instList = document.getElementById("inst-list");

const button = document.createElement("button");
const tryAgainButton = document.createElement("button");

let dice1;
let dice2;
const diceDiv = document.createElement("div");
const diceDiv2 = document.createElement("div");

let playNum = 0;




//function to get random number to random pick of dice.

function getDice() {

    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

//function for getting the correct image.
function getImg1(dice){
//Getting the right image.
    

    if (dice == 1) {
        image1.src = "dices/dice1.png"
    } else if (dice == 2) {
        image1.src = "dices/dice2.png"
    }else if (dice == 3) {
        image1.src = "dices/dice3.png"
    }else if (dice == 4) {
        image1.src = "dices/dice4.png"
    }else if (dice == 5) {
        image1.src = "dices/dice5.png"
    }else if (dice == 6) {
        image1.src = "dices/dice6.png"
    }

    return image1;
    
}

function getImg2(dice){
    //Getting the right image.
        
    
        if (dice == 1) {
            image2.src = "dices/dice1.png"
        } else if (dice == 2) {
            image2.src = "dices/dice2.png"
        }else if (dice == 3) {
            image2.src = "dices/dice3.png"
        }else if (dice == 4) {
            image2.src = "dices/dice4.png"
        }else if (dice == 5) {
            image2.src = "dices/dice5.png"
        }else if (dice == 6) {
            image2.src = "dices/dice6.png"
        }
    
        return image2;
        
    }
//Number that´ll be the counter.


//function to start the game.
startButton.addEventListener("click", function() {
    
        if (numInput.value < 6) {
            alert("pick a number");
        } else { 

            startDiv.innerHTML = "";
            instDiv.innerHTML = "";
            //Get the correct dices on the screen.

            dice1 = getDice();
            dice2 = getDice();

            let diceImage1 = getImg1(dice1);
            let diceImage2 = getImg2(dice2);

            diceImage1.classList.add("diceImg");
            diceImage2.classList.add("diceImg");

            diceDiv.classList.add("fleximg");
            diceDiv.appendChild(diceImage1);
            diceDiv.appendChild(diceImage2);

            instDiv.appendChild(diceDiv);
            

            //End the game if dice + dice = prepicked number.
            if(dice1 + dice2 == numInput.value) {
                gameOver();
            } else {

            // Get the number for the counter.
            playNum += dice1 + dice2;
            counter.innerHTML = playNum;
            startDiv.appendChild(counter);
            
            //Create button for reroll.
            button.innerText = "REROLL";
            button.classList.add("button");
            startDiv.classList.add("start");
            startDiv.appendChild(button);
            }
        }
})


//function to end the game.

function gameOver() {

    //Create the gameover text and append it to the div.
    startDiv.innerHTML = "";
    const gameOverText = document.createElement("h2");
    gameOverText.innerText = "GAME OVER";
    startDiv.appendChild(gameOverText);

    //Remove the diceimages.
    instDiv.innerHTML = "";



    //Create score value.
    let score = document.createElement("h3");
    score.innerText = "Total score: " + playNum;
    startDiv.appendChild(score);



    //Create try again button.

    tryAgainButton.innerHTML = "Try Again";
    tryAgainButton.classList.add("button");
    
    startDiv.appendChild(tryAgainButton);


}

//function to get page back to the start.

//function for the reroll
button.addEventListener("click", function() {

    //Get the correct dices on the screen.
    dice1 = getDice();
    dice2 = getDice();

    let diceImage1 = getImg1(dice1);
    let diceImage2 = getImg2(dice2);

    diceImage1.classList.add("diceImg");
    diceImage2.classList.add("diceImg");
    diceDiv.appendChild(diceImage1);
    diceDiv.appendChild(diceImage2);
    diceDiv.classList.add("fleximg");

    instDiv.classList.add("instructions");
    instDiv.appendChild(diceDiv);
    

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
    
    startDiv.innerHTML = "";
    

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