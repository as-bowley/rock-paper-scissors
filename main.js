let playerSelection = '';
let computerSelection; 
let result;
let playerWin = 0;
let computerWin = 0;
let currentScore;
let gameEndResult;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissor");
const resultDiv = document.querySelector(".results");
const restartButton = document.querySelector(".restart");
const resultDisplay = document.querySelector(".result-display");
const popup = document.querySelector(".game-over-modal");
const overlay = document.getElementById('overlay');
const gameOverMsg = document.querySelector('.game-over-msg');

function computerPlay() {
    //Randomly generates Computer's choice.
    const choice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    //Plays one round of Rock, Paper, Scissors.
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Rock' || playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
        return
    } else if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return result = "It's a draw! Try again.";
    } else {
        return result = `You lose! ${computerSelection} beats ${playerSelection}!`;  
    }
}

function scoreTracker() {
    //Updates the score after each round played.
    if (result.indexOf("win") > -1) {
        playerWin++;
        currentScore = `Player - ${playerWin} | Computer - ${computerWin}`;
        resultDisplay.textContent = currentScore;
    } else if (result.indexOf("lose") > -1) {
        computerWin++;
        currentScore = `Player - ${playerWin} | Computer - ${computerWin}`;
        resultDisplay.textContent = currentScore;
    }
}

function checkWinner() {
    //Checks the score for a winner after each round.
    if (playerWin === 5) {
        gameEndResult = "Congratulations! You win the game!";
        gameEndPopup();
    } else  if (computerWin === 5) {
        gameEndResult = "Unlucky! Computer has won the game! Try again!";
        gameEndPopup();
    } else {
        return;
    }
}

function gameRestart() {
    //Restarts game and enables weapon buttons/resets text.
    playerWin = 0;
    computerWin = 0;
    result = "Player - 0 | Computer 0";
    resultDiv.textContent = "Select your weapon!";
    resultDisplay.textContent = result;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function gameEndPopup() {
    gameOverMsg.textContent = gameEndResult;
    popup.classList.add('active');
    overlay.classList.add('active');
}

rockButton.addEventListener('click', e => { 
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
    console.log(result);
    scoreTracker();
    checkWinner();
} )

paperButton.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
    scoreTracker();
    checkWinner();
})

scissorsButton.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
    scoreTracker();
    checkWinner();
})

restartButton.addEventListener('click', () => {
    gameRestart();
})




