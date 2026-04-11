function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase()
    return choice
}

let userScore = 0;
let computerScore = 0;

function playRound(computerChoice, userChoice) {
    if (userChoice === computerChoice) {
        console.log("tie");
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`${userChoice} beats ${computerChoice}. Player wins!`);
        userScore += 1;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log(`${userChoice} beats ${computerChoice}. Player wins!`);
        userScore += 1;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`${userChoice} beats ${computerChoice}. Player wins!`);
        userScore += 1;
    } else {
        console.log(`${computerChoice} beats ${userChoice}. Computer wins!`);
        computerScore += 1;
    }
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

playRound(computerChoice, userChoice);