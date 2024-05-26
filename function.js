

let humanScore = 0;
let computerScore = 0;

const options = ['rock','paper','scissors'];

const getComputerChoice = () => { return options[Math.floor(Math.random() * options.length)] }

const getHumanChoice = () => { return prompt(`${options[0]} or ${options[1]} or ${options[2]}`) }

const playRound = (humanChoice , computerChoice) => {
    humanChoice.toLowerCase();

    if(typeof humanChoice !== 'number'){
        if(humanChoice === 'paper'){
            if(computerChoice === 'scissors'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }else{
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }else if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }else{
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }else if(humanChoice === 'scissors'){
            if(computerChoice === 'rock'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }else{
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }else{
            console.log(`it was a tie! (${humanChoice} : ${computerChoice})`);
        }
    }else{
        console.log('try again...');
        getHumanChoice();
    }
}

const main = () => {
    let rounds = 0;
    do{
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();    
        playRound(humanChoice , computerChoice);
        rounds++;
    }while(rounds !== 5);

    if(humanScore > computerScore){
        console.log(`the final winner is You!!!`)
    }else{
        console.log(`the final winner is the Computer!!!`)
    }
}

main();

