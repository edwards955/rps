// Add click handlers to RPS buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.getAttribute('name'), getComputerChoice());
  });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Rock') {
                console.log("It's a tie!");
            } else if (computerSelection === 'Paper') {
                console.log("You Lose! Paper beats Rock");
            } else {
                console.log("You Win! Rock beats Scissors!");
            }
            break;
        case 'paper':
            if (computerSelection === "Paper") {
                return "It's a tie!";
            } else if (computerSelection === "Scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Win! Paper beats Rock!";
            }
            break;
        case 'scissors':
            if (computerSelection === "Scissors") {
                return "It's a tie!";
            } else if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissors!";
            } else {
                return "You Win! Scissors beats Paper!";
            }
            break;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose Rock, Paper or Scissors: ");
        let result = playRound(choice, getComputerChoice());
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("Human is victorious!");
    } else if (computerScore > playerScore) {
        console.log("Computer is victorious!");
    } else {
        console.log("No one wins! That sucks!");
    }
}