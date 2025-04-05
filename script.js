const choices = ['🪨', '📄', '✂️'];

//functions
function getComputerChoice() {
    let randomInt = Math.floor(Math.random()*3);
    return choices[randomInt];
}

let buttons = document.querySelector("#playing-buttons");
let showRound = document.querySelector("#round")
let mainContainer = document.querySelector("#container")
let message = document.querySelector("#message");
let scores = document.querySelector("#scores");
let gamePlay = document.querySelector("#game");


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        message.textContent = "It's a tie!";
    }

    //the game logic
    if (humanChoice == '🪨') {
        if (computerChoice == '📄') {
            message.textContent = "paper beats rock";
            return 'c';
        } if (computerChoice == '✂️') {
            message.textContent = 'rock beats scissors';
            return 'h';
        }
    }

    if (humanChoice == '📄') {
        if (computerChoice == '🪨') {
            message.textContent = 'paper beats rock';
            return 'h';
        } if (computerChoice == '✂️') {
            message.textContent = 'scissors beats paper';
            return 'c';
        }
    }

    if (humanChoice == '✂️') {
        if (computerChoice == '🪨') {
            message.textContent = 'rock beats scissors';
            return 'c';
        } if (computerChoice == '📄') {
            message.textContent = 'scissors beats paper';
            return 'h';
        }
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;


    buttons.addEventListener("click", event => {
        round++;
        let choice = event.target.id;

        if (round <= 5) {
            const humanSelection = choice;
            const computerSelection = getComputerChoice();
        
            console.log(`Your choice: ${humanSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);

            let game = playRound(humanSelection, computerSelection);

            if (game === 'h') {
                humanScore++;
            } else if (game === 'c') {
                computerScore++;
            }

            console.log(round);
            showRound.textContent = `Round: ${round}`;

            scores.textContent = `${humanScore}:${computerScore}`;
            gamePlay.textContent = `${humanSelection} vs ${computerSelection}`;

        } 
        
        if (round == 5) {
            showRound.textContent = '';

            scores.classList.add("win");
            message.classList.add("win");
            if (humanScore>computerScore) {
                message.textContent = "You are the winner";
            } else if (humanScore<computerScore) {
                message.textContent = "The computer has won";
            } else {
                message.textContent = "It's a tie";
            }
        }

    })
}

playGame();
