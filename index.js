const choices = ["rock", "paper", "scissors"];

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getComputerChoice = () => {
  const idx = Math.floor(Math.random() * choices.length);
  console.log("Computer chooses:", capitalize(choices[idx]));
  return choices[idx];
};

const getPlayerChoice = () => {
  const choice = prompt("What's your move? Rock, Paper, or Scissors?");
  console.log("Player chooses:", capitalize(choice));
  return choice.toLowerCase();
};

const getWinner = (playerChoice, computerChoice) => {
  // Draw Condition
  if (playerChoice == computerChoice) {
    console.log(`This round was a draw. You both picked ${playerChoice}`);
    return "Draw";

    // Lose Condition
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log(`You lose, ${computerChoice} beats ${playerChoice}`);
    return "lose";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log(`You lose, ${computerChoice} beats ${playerChoice}`);
    return "lose";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log(`You lose, ${computerChoice} beats ${playerChoice}`);
    return "lose";

    // Win Condition
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return "win";
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return "win";
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return "win";
  } else {
    console.log(
      "Invalid input. Please enter either 'rock', 'paper', or 'scissors'"
    );
    return "Invalid input";
  }
};

const playGame = (getPlayerChoice, getComputerChoice) => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const outcome = getWinner(playerChoice, computerChoice);

    if (outcome == "win") {
      playerScore++;
      console.log(
        `Current Score: \n Player: ${playerScore} \n Computer: ${computerScore}`
      );
    } else if (outcome == "lose") {
      computerScore++;
      console.log(
        `Current Score: \n Player: ${playerScore} \n Computer: ${computerScore}`
      );
    } else if (outcome == "Invalid input") {
      console.log("Invalid input");
      console.log(
        `Current Score: \n Player: ${playerScore} \n Computer: ${computerScore}`
      );
    }
  }

  if (playerScore >= 5) {
    console.log(
      `You win the game! Final scores: \n Player: ${playerScore} \n Computer: ${computerScore}`
    );
  } else if (computerScore >= 5) {
    console.log(
      `You lose the game! Final scores: \n Player: ${playerScore} \n Computer: ${computerScore}`
    );
  }
};

const makeGame = (humanVsComputer) => {
  if (humanVsComputer) {
    // Human Vs Computer
    playGame(getPlayerChoice, getComputerChoice);
  } else {
    // Computer Vs Computer
    playGame(getComputerChoice, getComputerChoice);
  }
};

makeGame(false);
