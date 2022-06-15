const moves = [
    "rock", 
    "paper", 
    "scissors"
];

//console.log(`${moves}`);

function computerPlay (arr) {
    let randomMove = Math.floor(Math.random() * arr.length);
    return arr[randomMove];
};

//console.log(computerPlay(moves));
