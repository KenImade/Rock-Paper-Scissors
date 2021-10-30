let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


const playerScoreUpdate = document.querySelector('.player-score');
const computerScoreUpdate = document.querySelector('.computer-score');
const message = document.querySelector('.message');
const resetButton = document.getElementById('btn');
const buttons = document.querySelectorAll('button');


//this function randomly returns rock, paper or scissors
function computerPlay () {
    const items = ["Rock","Paper","Scissors"];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection, computerSelection);
        //console.log(`playerscore: ${playerScore}, computerscore: ${computerScore}`);
        playerScoreUpdate.textContent = playerScore;
        computerScoreUpdate.textContent = computerScore;
        if (playerScore === 5 || computerScore === 5) {
            winner();
        }
    });
});

//function to decide who wins the round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) { 
        //console.log("It is a draw");
        message.firstElementChild.textContent = "It is a draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        //console.log("You lose! Paper beats Rock");
        message.firstElementChild.textContent = "Computer wins this round";
        computerScore = ++computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        //console.log("You Win! Rock beats Scissors");
        message.firstElementChild.textContent = "You won this round";
        playerScore = ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        //console.log("You Win! Paper beats Rock");
        message.firstElementChild.textContent = "You won this round";
        playerScore = ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        //console.log("You lose! Scissors beats Paper");
        message.firstElementChild.textContent = "Computer wins this round";
        computerScore = ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        //console.log("You lose! Rock beats Scissors");
        message.firstElementChild.textContent = "Computer wins this round";
        computerScore = ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        //console.log("You Win! Scissors beats Paper");
        message.firstElementChild.textContent = "You win this round";
        playerScore = ++playerScore;
    }
}


// function to determine who won the game
function winner () {
    if (playerScore > computerScore) {
        message.firstElementChild.textContent = "Player is the winner, play again?";
        //console.log(`Player is the winner, Points breakdown: Player:${playerScore}, Computer: ${computerScore}`);
    } else {
        message.firstElementChild.textContent = "Computer is the winner, play again?";
        //console.log(`Computer wins, Points breakdown: Player:${playerScore}, Computer: ${computerScore}`);
    }
    resetButton.style.display = "block"; 
}

resetButton.addEventListener('click', resetGame);

//function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreUpdate.textContent = playerScore;
    computerScoreUpdate.textContent = computerScore;
    message.firstElementChild.textContent = "LET'S PLAY!";
    resetButton.style.display = "none";
}