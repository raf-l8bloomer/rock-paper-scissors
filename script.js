const moves = [
    'rock', 
    'paper', 
    'scissors'
];
let yourWin = 0;
let compWin = 0;
let playerSelection = '';
let computerSelection = '';

// div element to hold results
const resultDiv = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(resultDiv);

// p tag shows winner of round
const round = document.createElement('p');
resultDiv.appendChild(round);

// shows scoreboard 
const results = document.createElement('h3');
resultDiv.appendChild(results);
results.textContent = `YOU: ${yourWin} vs COMP: ${compWin}`;


/* Produces the Computer's random move*/

function computerPlay (arr) {
    let randomMove = Math.floor(Math.random() * arr.length);
    return arr[randomMove];
};


// Gahers all button tags into NodeList
const buttons = document.querySelectorAll('button');

//Takes each button tag and assigns clicked button to the playerSelection then runs playRound function


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.id);
        playRound(playerSelection, computerSelection);
        
    })
})


/* function allows 5 rounds of playRound function while alerting final message of the winner of the game
*/

function game () {
    for ( let i = 0; i < 5; i++) {
        playRound (playerSelection, computerSelection)
    }  results.textContent=(`You:${yourWin} Computer:${compWin}`);
    if ( yourWin > compWin){
        round.textContent = (`You ate that.`)
    } else (
        round.textContent = (`Try again, loser. (refresh)`)
    )
} 

/* function takes "moves" parameters, capitalizes the inputs to make them case insensitive, and then compares moves to determine winner.
ROCK > SCISSORS
SCISSORS > PAPER
PAPER > ROCK
*/

function playRound (playerSelection, computerSelection) {
    // playerSelection = prompt('Rock, paper, scissors?');
    computerSelection = computerPlay(moves);
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    console.log(`YOU: ${player} VS. COMP: ${computer}`);
    if (player === 'ROCK' && computer === 'SCISSORS'){
        round.textContent = (`You win! ${player} beats ${computer}`)
        yourWin++;
    } else if (player === 'SCISSORS' && computer === 'PAPER') {
        round.textContent = (`You win! ${player} beats ${computer}`)
        yourWin++;
    }  else if (player === 'PAPER' && computer === 'ROCK') {
        round.textContent = (`You win! ${player} beats ${computer}`)
        yourWin++;
    } else if (player === computer){
        round.textContent =  (`Tie!`);
        
    } else {
        round.textContent = (`You lose :( ${computer} beats ${player}`);
    compWin++;
    } results.textContent = `YOU: ${yourWin} vs COMP: ${compWin}`
}



