function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase()
    return choice
}