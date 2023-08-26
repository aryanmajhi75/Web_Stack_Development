function randomNumberGuessingGame() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
  
    if (userGuess === randomNum) {
      console.log("Good Work");
    } else {
      console.log("Not matched");
    }
  }
  
  randomNumberGuessingGame();
  