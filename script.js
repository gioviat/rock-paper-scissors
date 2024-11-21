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