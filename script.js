const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    randomInt = Math.floor(Math.random()*3);
    return choices[randomInt];
}