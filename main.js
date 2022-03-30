const playerSelection = window.prompt('Please type Rock, Paper or Scissors');
let computerSelection = computerPlay();
let result;
let playerWin = 0;
let computerWin = 0;

function computerPlay() {
    //Randomly generates Computer's choice.
    const choice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    //Plays one round of Rock, Paper, Scissors.
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors' || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        playerWin++;
        return result = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'scissors') {
        return result = "It's a draw! Try again.";
    } else {
        computerWin++;
        return result = `You lose! ${computerSelection} beats ${playerSelection}!`;  
    }
}

function game() {
    //Repeats game. Set to 5 times currently but can be adjusted by changing the '5' in 'i<5'.
    for (let i = 0; i < 5; i ++) {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        console.log(result, `Score: Player - ${playerWin} Computer - ${computerWin}`);
    }
}

game();

