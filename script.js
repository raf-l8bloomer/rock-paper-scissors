const moves = [
    'rock', 
    'paper', 
    'scissors'
];

//console.log(`${moves}`);

/* Produces the Computer's random move*/

function computerPlay (arr) {
    let randomMove = Math.floor(Math.random() * arr.length);
    return arr[randomMove];
};

//console.log(computerPlay(moves));



function game () {
    for ( let i = 0; i < 5; i++) {
        playRound (playerSelection, computerSelection);
       
    }  alert(`You:${yourWin} Computer:${compWin}`);
} 

/* function takes moves parameters, capitalizes the inputs to make them case insensitive, and then compares moves to determine winner.
ROCK > SCISSORS
SCISSORS > PAPER
PAPER > ROCK
*/

function playRound (playerSelection, computerSelection) {
    playerSelection;
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === 'ROCK' && computer === 'SCISSORS'){
        alert(`You win! ${player} beats ${computer}`)
        yourWin++;
    } else if (player === 'SCISSORS' && computer === 'PAPER') {
        alert(`You win! ${player} beats ${computer}`)
        yourWin++;
    }  else if (player === 'PAPER' && computer === 'ROCK') {
        alert(`You win! ${player} beats ${computer}`)
        yourWin++;
    } else if (player === computer){
        alert (`Tie! Refresh and try again`);
        yourWin++;
    } else {
    alert(`You lose :( ${computer} beats ${player}`);
    compWin++;
    }
}

let yourWin = 0;
let compWin = 0;
let playerSelection = prompt('Rock, paper, scissors?');
let computerSelection = computerPlay(moves);
console.log(game());



