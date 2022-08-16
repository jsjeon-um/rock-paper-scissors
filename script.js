
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if ( num == 0) { 
        return 'Rock';
    }
    else if ( num == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == 'ROCK') {
        if (computerSelection == 'Rock') { 
            console.log('It\'s a tie!, you both picked Rock');
            return 0;
        }
        else if (computerSelection == 'Scissors') { 
            console.log('You Win! Rock beats Scissors');
            return 1;
        }
        else {
            console.log('You Lose! Paper beats Rock');
            return 2;
        }
    }
    else if (playerSelection == 'PAPER') {
        if (computerSelection == 'Paper') { 
            console.log('It\'s a tie!, you both picked Paper');
            return 0;
        }
        else if (computerSelection == 'Rock') { 
            console.log('You Win! Paper beats Rock');
            return 1;
        }
        else {
            console.log('You Lose! Scissors beat Paper');
            return 2;
        }
    }
    else {
        if (computerSelection == 'Scissors') { 
            console.log('It\'s a tie!, you both picked Scissors');
            return 0;
        }
        else if (computerSelection == 'Paper') { 
            console.log('You Win! Scissors beat Paper');
            return 1;
        }
        else {
            console.log('You Lose! Rock beats Scissors');
            return 2;
        }
    }
}

function tieBreaker() {
    let ticker = 0;
    while (ticker < 1) {
        let playerSelection = prompt('Start the game by picking among \'Rock, Paper, Scissors');
        let computerSelection = getComputerChoice();
        ticker = playRound(playerSelection, computerSelection);
    }
    return ticker;
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; ++i) { 
        let playerSelection = prompt('Start the game by picking among \'Rock, Paper, Scissors');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if(result == 1) {
            playerWinCount++;
            if(playerWinCount == 3) { 
                return 'Congrats!, You won Rock, Paper, Scissors';
            }
        }
        else if (result == 2) {
            computerWinCount++;
            if (computerWinCount == 3) {
                return 'Better luck next time!';
            }
        }
        else {
            let tie = tieBreaker();
            if (tie == 1) { 
                playerWinCount++;
                if(playerWinCount == 3) { 
                    return 'Congrats!, You won Rock, Paper, Scissors';
                }
            }
            else {
                computerWinCount++;
                    if (computerWinCount == 3) {
                    return 'Better luck next time!';
                }
            }
        }
    }
}


