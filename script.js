function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1. / 3.) {
        return "rock"; 
    } else if (rand < 2. / 3.) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = null;
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Choose rock, paper or scissors").toLowerCase();
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both chose ${humanChoice}`);
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else {
            console.log("You lose! Scissors beat Paper!");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else {
            console.log("You win! Scissors beat Paper!");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);