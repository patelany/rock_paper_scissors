let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetBtn = document.getElementById('reset');

//capitalize first letter of result_p
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// randomly return computer choice of Rock, Paper or Scissors
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];   
}

function win(playerSelection, computerSelection) {
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${(capitalizeFirstLetter(playerSelection))} beats ${(capitalizeFirstLetter(computerSelection))}. You win!`;

}
function lose(playerSelection, computerSelection) {
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${(capitalizeFirstLetter(playerSelection))} loses to ${(capitalizeFirstLetter(computerSelection))}. You lost!`;
}

function draw() {
    result_p.innerHTML = `It's a draw.`;
    
}

//function to play a single round of Rock, Paper, or Scissors
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        if (computerScore < 5 && playerScore < 5) {
        draw();
        }
        else {
            game();
        }
    }

    else if ((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'rock')) {
        if (computerScore < 5 && playerScore < 5) {
            win(playerSelection, computerSelection);
        }
        else {
            game();
        }
    }
    else {
        if (computerScore < 5 && playerScore < 5) {
            lose(playerSelection, computerSelection);
        }
        else {
            game();
        }
    }
}

function game() { 
    while (computerScore < 5 && playerScore < 5) {
        playRound();
    }
    if (playerScore == 5) {
        result_p.innerHTML = `Game over: You Win!`;
    }
    else if (computerScore == 5) {
        result_p.innerHTML = `Game over: Computer Wins ☠️ `;
    }
} 

function main() {

    rock_div.addEventListener('click', function() {
       playRound("rock");
    })

    paper_div.addEventListener('click', function() {
        playRound("paper");
    })

    scissors_div.addEventListener('click', function() {
        playRound("scissors");
    })

    resetBtn.addEventListener('click', () => location.reload());
}

main();








