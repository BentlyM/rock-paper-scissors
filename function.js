let humanScore = 0;
let computerScore = 0;
const result = document.createElement('p');
const resultWrap = document.querySelector('.results');
const humanResult = document.querySelector('#human');
const computerResult = document.querySelector('#computer');
const winner = document.createElement('h3');

const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
}

const getHumanChoice = () => {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });
    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });
    scissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
}

const playRound = (humanChoice, computerChoice) => {
    if (humanScore >= 5 || computerScore >= 5) {
        return; // Game already ended
    }

    if (humanChoice === computerChoice) {
        result.textContent = `It was a tie! (${humanChoice} : ${computerChoice})`;
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    } else {
        result.textContent = 'Invalid choice. Please choose rock, paper, or scissors.';
    }

    humanResult.textContent = humanScore;
    computerResult.textContent = computerScore;
    resultWrap.appendChild(result);

    checkWinner();
}

const checkWinner = () => {
    if (humanScore >= 5) {
        winner.textContent = 'The final winner is You!!!';
        resultWrap.appendChild(winner);
    } else if (computerScore >= 5) {
        winner.textContent = 'The final winner is the Computer!!!';
        resultWrap.appendChild(winner);
    }
}

const main = () => {
    getHumanChoice();
}

main();
