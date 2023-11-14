// Add click handlers to RPS buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.getAttribute('name'), getComputerChoice());
  });
});

const results = document.querySelector('.results');
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

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
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection === 'Rock') {
        results.textContent = "It's a tie!";
      } else if (computerSelection === 'Paper') {
        results.textContent = "You Lose! Paper beats Rock";
        computerScore++;
      } else {
        results.textContent = "You Win! Rock beats Scissors!";
        playerScore++;
      }
      break;
    case 'paper':
      if (computerSelection === "Paper") {
        results.textContent = "It's a tie!";
      } else if (computerSelection === "Scissors") {
        results.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
      } else {
        results.textContent = "You Win! Paper beats Rock!";
        playerScore++;
      }
      break;
    case 'scissors':
      if (computerSelection === "Scissors") {
        results.textContent = "It's a tie!";
      } else if (computerSelection === "Rock") {
        results.textContent = "You Lose! Rock beats Scissors!";
        computerScore++;
      } else {
        results.textContent = "You Win! Scissors beats Paper!";
        playerScore++;
      }
      break;
  }
  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
  checkForWinner();
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

function checkForWinner() {
  if (playerScore === 5) {
    console.log("Human is victorious!");
  } else if (computerScore === 5) {
    console.log("Computer is victorious!");
  }
}