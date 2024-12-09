let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice("rock", "paper", "scissors");

function getComputerChoice(rstance, pstance, sstance) {
    let x = Math.floor(Math.random()* 3) + 1;
    //console.log(x);
    if (x===1) {
        console.log(rstance);
    }

    else if (x===2) {
        console.log(pstance);
    } 
    
    else if (x===3) {
        console.log(sstance);
    }
    return;

}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors?");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(HumanChoice, ComputerChoice) {
    console.log("Your score is: " + humanScore + " The enemy score is: " + computerScore);
    return;
}

playRound(humanSelection, computerSelection);
console.log("You chose: " , humanSelection);

