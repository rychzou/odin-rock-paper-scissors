function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = [Math.floor(Math.random * choices.length)];
    return randomIndex;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!"
    } else {
        return "You lose!"
    }
}

function playGame() {

}

playGame()