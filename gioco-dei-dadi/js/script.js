let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let playerRollNumber = document.querySelector("#player-roll-number");
let computerRollNumber = document.querySelector("#computer-roll-number");
let winMessage = document.querySelector("#win-message");
let rollDiceBtn = document.querySelector("#roll-dice-btn");
let pointsCount = [0, 0];


rollDiceBtn.addEventListener("click", () => {
    let playerDiceRollResult = Math.floor( ( Math.random() * 6 ) + 1 );
    let computerDiceRollResult = Math.floor( ( Math.random() * 6 )  + 1 );
    playerRollNumber.textContent = playerDiceRollResult;
    computerRollNumber.textContent = computerDiceRollResult;

    if( playerDiceRollResult > computerDiceRollResult ) {
        pointsCount[0]++;
        playerScore.textContent = pointsCount[0];
        winMessage.textContent = "You win!"
    }
    else if( playerDiceRollResult < computerDiceRollResult ) {
        pointsCount[1]++;
        computerScore.textContent = pointsCount[1];
        winMessage.textContent = "Computer win!"
    }
    else {
        winMessage.textContent = "Draw!"
    }

});