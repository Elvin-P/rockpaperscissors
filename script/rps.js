let numTurns = 0;
let playerWins = 0;
let computerWins = 0;
let message;

const Choices = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',
    3: 'lizard',
    4: 'spock'
}

const rules = [
    [0, -1, 1, 1, -1],
    [1, 0, -1, -1, 1],
    [-1, 1, 0, 1, -1],
    [-1, 1, -1, 0, 1],
    [1, -1, 1, -1, 0]
]

let computerTurn = () => {
    return Math.floor(Math.random() * 5);
}

let playerTurn = (playerChoice) => {
    if (message === undefined)
        message = document.querySelector("#game-status");
    if (numTurns>= 5) return;
    let computerChoice = computerTurn();
    let result = rules[playerChoice][computerChoice];
    console.log(Choices[computerChoice]);
    if (result == 0) {
        message.innerText = `You - ${playerWins}  Computer - ${computerWins}`;
        console.log('Nobody wins');
    } 
    else if (result == 1) {
        message.innerText = `You - ${++playerWins}  Computer - ${computerWins}`;
        console.log('You win this round');
        numTurns++;
    }
    else {
        message.innerText = `You - ${playerWins}  Computer - ${++computerWins}`;
        console.log('You lose this round');
        numTurns++;
    }
}