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

/* function allows 5 ounds of playRound function while alerting final message of the winner of the game
*/

function game () {
    for ( let i = 0; i < 5; i++) {
        playRound (playerSelection, computerSelection);
    }  alert(`You:${yourWin} Computer:${compWin}`);
    if ( yourWin > compWin){
        alert(`You ate that.`)
    } else (
        alert(`Try again, loser. (refresh)`)
    )
} 

/* function takes "moves" parameters, capitalizes the inputs to make them case insensitive, and then compares moves to determine winner.
ROCK > SCISSORS
SCISSORS > PAPER
PAPER > ROCK
*/

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('Rock, paper, scissors?');
    computerSelection = computerPlay(moves);
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    console.log(`YOU: ${player} VS. COMP: ${computer}`);
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
        alert (`Tie!`);
        
    } else {
    alert(`You lose :( ${computer} beats ${player}`);
    compWin++;
    }
}

let yourWin = 0;
let compWin = 0;
let playerSelection = '';
let computerSelection = '';
console.log(game());



