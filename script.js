function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
}

function getWinner(userScore, computerScore) {
    if (userScore === computerScore) {
        return `It's a tie! Score: ${userScore}, Computer Score: ${computerScore}`;
    } else if (userScore > computerScore) {
        return `You win! Score: ${userScore}, Computer Score: ${computerScore}`;
    }
    return `Computer Wins! Score ${userScore}, Your Score: ${userScore}`;
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 1;

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
        rounds += 1;
    }

    while (rounds <= 5) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();

        playRound(computerChoice, userChoice);
    }
    return getWinner(userScore, computerScore);
}

let results = playGame();
console.log(results);