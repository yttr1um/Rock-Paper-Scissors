//global variables
const humanScore = 0;
const computerScore = 0;

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
    return (choices.includes(choice.toLowerCase())) ? choice.toLowerCase() : "invalid input";
}

console.log(getComputerChoice());
console.log(getHumanChoice());

// function playRound(humanChoice, computerChoice) {
//     //conditions
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);