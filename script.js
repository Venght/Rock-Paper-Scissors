let humanScore = 0;
let computerScore = 0;

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice("rock", "paper", "scissors");

function getComputerChoice(rstance, pstance, sstance) {
  let x = Math.floor(Math.random() * 3) + 1;
  if (x === 1) {
    choice = rstance;
  } else if (x === 2) {
    choice = pstance;
  } else if (x === 3) {
    choice = sstance;
  }
  console.log(`Computer choice: ${choice}`);
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(HumanChoice, ComputerChoice) {
 
  if (
    (HumanChoice == "rock" && ComputerChoice == "scissors") ||
    (HumanChoice == "paper" && ComputerChoice == "rock") ||
    (HumanChoice == "scissors" && ComputerChoice == "paper")
  ) {
    console.log("You won");
    humanScore++;
  } else if (
    (ComputerChoice == "rock" && HumanChoice == "scissors") ||
    (ComputerChoice == "paper" && HumanChoice == "rock") ||
    (ComputerChoice == "scissors" && HumanChoice == "paper")
  ) {
    console.log("You lost");
    computerScore++;
  } else {
    console.log("Both are tie");
  }

  console.log(
    "Your score is: " + humanScore + " The enemy score is: " + computerScore
  );
  return;
}

function playGame() {

  for (let i = 0; i < 5; i++) {
    console.log(`Start of round ${i+1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice("rock", "paper", "scissors");
    playRound(humanSelection, computerSelection);
    console.log(`End of round ${i+1}`);
  }
}

playGame();

