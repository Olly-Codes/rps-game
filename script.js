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
    const playerScore = document.querySelector("#p-score");
    const cpuScore = document.querySelector("#cpu-score");
    const gameRounds = document.querySelector("#rounds");
    const status = document.querySelector("#status");
    const buttons = document.querySelectorAll("button");

    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const userChoice = e.target.textContent.toLowerCase();
            playRound(getComputerChoice(), userChoice);
        });
    });

    function playRound(computerChoice, userChoice) {
        if (rounds >= 5) return;

        if (userChoice === computerChoice) {
            status.textContent = "Tie";
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            status.textContent = `${userChoice} beats ${computerChoice}. Player wins!`;
            userScore += 1;
            playerScore.textContent = userScore;
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            status.textContent = `${userChoice} beats ${computerChoice}. Player wins!`;
            userScore += 1;
            playerScore.textContent = userScore;
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            status.textContent = `${userChoice} beats ${computerChoice}. Player wins!`;
            userScore += 1;
            playerScore.textContent = userScore;
        } else {
            status.textContent = `${computerChoice} beats ${userChoice}. Computer wins!`;
            computerScore += 1;
            cpuScore.textContent = computerScore;

        }
        rounds += 1;
        gameRounds.textContent = rounds;

        if (rounds === 5) {
            status.textContent = getWinner(userScore, computerScore);
        }

    }
}

playGame();