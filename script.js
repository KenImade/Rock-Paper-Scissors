//this function randomly returns rock, paper or scissors
function computerPlay () {
    // declare an array of items
    const items = ["Rock","Paper","Scissors"];
    // randomly select an item from that array and store in a variable
    let item = items[Math.floor(Math.random()*items.length)];
    // return the variable as the function output
    return item;
}

//function to decide who wins the round
function playRound(playerSelection, computerSelection) {
    //convert playerSelection to string and lowercase
    playerSelection = String(playerSelection).toLowerCase();
    // convert computerSelection to lowercase
    computerSelection = computerSelection.toLowerCase();
    // if playerSelection and computerSelection are the same it is a draw
    if (playerSelection === computerSelection) {
        // return draw   
        console.log("It is a draw");
        return 'draw';
    // else if playerSelection is rock and computerSelection is paper player loses 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // return player loses
        console.log("You lose! Paper beats Rock");
        return  'lose';
    // else if playerSelection is rock and computerSelection is scissors player wins
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // return player wins
        console.log("You Win! Rock beats Scissors");
        return 'win';
    // else if playerSelection is paper and computerSelection is rock player loses
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // return player loses
        console.log("You Win! Paper beats Rock");
        return 'win';
    // else if playerSelection is paper and computerSelection is scissors player loses
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // return player loses
        console.log("You lose! Scissors beats Paper");
        return 'lose';
    // else if playerSelection is scissors and computerSelection is rock player loses
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // return player loses
        console.log("You lose! Rock beats Scissors");
        return 'lose';
    // else if playerSelection is scissors and computerSelection is paper player wins
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // return player wins
        console.log("You Win! Scissors beats Paper");
        return 'win';
    }
}

// function to run the game
function game() {
    // declare iterator for while loop
    let i = 0;
    // declare variables to hold player, computer and draw scores
    let finalPlayerScore = 0;
    let finalComputerScore = 0;
    let finalDraw = 0;
    // loop to play the game 
    while (i < 5) {
        // capture player input
        const playerSelection = prompt("Choose your fighter: ");
        // function call to get computer input
        const computerSelection = computerPlay();
        // function call to determine round winner
        let result = playRound(playerSelection, computerSelection);
        //log the result from each round and assign a point to either the player or computer
        if (result == 'win') {
            finalPlayerScore += 1;
        } else if (result == 'lose') {
            finalComputerScore += 1;
        } else if (result == 'draw'){
            // if it is a draw nobody gets point
            finalDraw += 1;
        }
        // update while loop
        i++;
    }
    // put the final scores into an array
    let finalPoints = [finalPlayerScore, finalComputerScore, finalDraw]
    // parse that array to the winner function to determine winner
    let total = winner(finalPoints);
    // output the winner on the console
    console.log(total);
}

// function to determine who won the game
function winner (finalPoints) {
    // if playerScore is greater than computerScore, return player wins to the game function
    if (finalPoints[0] > finalPoints[1]) {
        return `Player is the winner, Points breakdown: Player:${finalPoints[0]}, Computer: ${finalPoints[1]}`;
    // else if computerScore is greater than playerScore return computer wins to the game function
    } else if (finalPoints[1] > finalPoints[0]) {
        return `Computer wins, Points breakdown: Player:${finalPoints[0]}, Computer: ${finalPoints[1]}`;
    // else if computerscore and playerScore are equal return draw to the game function 
    } else {
        return `Draw, Points breakdown: Player:${finalPoints[0]}, Computer: ${finalPoints[1]}`;
    }
}