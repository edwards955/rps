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
                return "It's a tie!";
            } else if (computerSelection === 'Paper') {
                return "You lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors!";
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