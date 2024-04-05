function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = [Math.floor(Math.random * choices.length)];
    return randomIndex;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    // play 5 rounds loops
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors:");
    }
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }
}

if (playerScore > computerScore) {
    console.log("Congrats! You win " + playerScore + " to " + computerScore);
} else {
    console.log("Sorry, computer wins " + computerScore + " to " + playerScore);
}

playGame()