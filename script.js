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
            return 'c';
        } if (computerChoice == 'scissors') {
            console.log('rock beats scissors');
            return 'h';
        }
    }

    if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('paper beats rock');
            return 'h';
        } if (computerChoice == 'scissors') {
            console.log('scissors beats paper');
            return 'c';
        }
    }

    if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log('rock beats scissors')
            return 'c';
        } if (computerChoice == 'paper') {
            console.log('scissors beats paper');
            return 'h';
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i<=5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);
    
        let round = playRound(humanSelection, computerSelection);
        if (round === 'h') {
            humanScore++;
        } else if (round === 'c') {
            computerScore++;
        }
    }
    
    //Announce the winner
    if (humanScore>computerScore) {
        console.log("You are the winner");
    } else if (humanScore<computerScore) {
        console.log("The computer has won");
    } 
}

playGame();