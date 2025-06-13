let playerScore = 0;
let computerScore = 0;



const CHOICES = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    const choice = CHOICES[randomIndex];
    return choice;
}

function getComputerChoice() {
    return getRandomChoice();
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    } while (!CHOICES.includes(choice));
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    
    // Check if player wins
    if (winConditions[playerSelection] === computerSelection) {
        playerScore++;
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        // Player losesa
        computerScore++;
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Round ${i + 1}:`);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log('---');
    }
    
    // Show final scores
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
}

playGame();