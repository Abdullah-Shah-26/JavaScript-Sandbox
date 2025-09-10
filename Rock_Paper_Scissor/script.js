let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Game was draw! Play again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${CompChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // Generate Computer choice
  const CompChoice = genCompChoice();
  console.log("Comp choice = ", CompChoice);

  if (userChoice === CompChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = CompChoice === "scissor" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,CompChoice);
  }
};

choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
