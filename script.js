//global variables
let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

//functions
function getComputerChoice() {
    let randomInt = Math.floor(Math.random()*3);
    return choices[randomInt];
}

function getHumanChoice() {
    let choice = prompt("Enter your move: ");

    //check if choice is part of the choices
    //returns the choice in lowercase to make it case insensitive
    return (choices.includes(choice.toLowerCase())) ? choice.toLowerCase() : underfined;
}

function playRound(humanChoice, computerChoice) {

    //the game logic
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            console.log("paper beats rock")
            computerScore++;
        } if (computerChoice == 'scissors') {
            console.log('rock beats scissors');
            humanScore++;
        }
    }

    if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('paper beats rock');
            humanScore++;
        } if (computerChoice == 'scissors') {
            console.log('scissors beats paper');
            computerScore++;
        }
    }

    if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log('rock beats scissors')
            computerScore++;
        } if (computerChoice == 'paper') {
            console.log('scissors beats paper');
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//Announce the winner
if (humanScore>computerScore) {
    console.log("You are the winner");
} else if (humanScore<computerScore) {
    console.log("The computer has won");
} else {
    console.log("It's a tie"); //It's a tie
}

console.log(humanSelection);
console.log(computerSelection);