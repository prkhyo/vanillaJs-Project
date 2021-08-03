

const gameForm = document.querySelector("#game-form");
const max = document.querySelector("#generate input");
const guess = document.querySelector("#guessNumber");
const numberResult = document.querySelector("#numberResult");
const matchResult = document.querySelector("#matchResult");

function gameInfoSubmit(event) {
  event.preventDefault();
  const guessNumber = guess.value;
  const maxNumber = max.value;
  if (guessNumber !== "" && maxNumber !== "") {
    gamePlay(parseInt(guessNumber), maxNumber);
  }
}

function gamePlay(guessNumber, maxNumber) {
  const randomNumber = Math.floor(Math.random() * maxNumber);

  numberResult.innerText = `You chose ${guessNumber}, the machine chose: ${randomNumber}.`;

  if (guessNumber === randomNumber) {
    matchResult.innerText = "You win!";
  } else if (guessNumber !== randomNumber) {
    matchResult.innerText = "You lost!";
  }
}

gameForm.addEventListener("submit", gameInfoSubmit);
