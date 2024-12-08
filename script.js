
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
    //console.log(choice);
    return choice;
}

const humanScore = 0;
const computerScore = 0;

let userChoice = getHumanChoice();
//typeof userChoice
console.log("You chose: " , userChoice);

getComputerChoice("Rock", "Paper", "Scissors")
