let numTurns = 0;
let playerWins = 0;
let computerWins = 0;
let message;
let message1;

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

const computerTurn = () => {
    return Math.floor(Math.random() * 5);
}

const playerTurn = (playerChoice) => {
    if (message === undefined)
        message = document.querySelector("#score");
        message1 = document.querySelector("#turn");
    if (playerWins >= 5) {
        message.innerText = "You win the game!";
        return;
    }
    if (computerWins >= 5) {
        message.innerText = "You lose the game!";
        return;
    }

    let computerChoice = computerTurn();

    let result = rules[playerChoice][computerChoice];
    if (result == 0) {
        message.innerText = `You - ${playerWins}  Computer - ${computerWins}`;
        message1.innerText = "Tie!";
    } 
    else if (result == 1) {
        message.innerText = `You - ${++playerWins}  Computer - ${computerWins}`;
        message1.innerText = "You win this round!";
        numTurns++;
    }
    else {
        message.innerText = `You - ${playerWins}  Computer - ${++computerWins}`;
        message1.innerText = "You lose this round!";
        numTurns++;
    }
}