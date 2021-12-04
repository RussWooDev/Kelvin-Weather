let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);

//used to determine which guess is closest to target num
const compareGuesses = (humanGuess, comGuess, secretNum) => {
  const humSecDiff = Math.abs(humanGuess - secretNum);
  const comSecDiff = Math.abs(comGuess - secretNum);

  if (humSecDiff === comSecDiff || humSecDiff > comSecDiff) {
    return true;
  } else {
    return false;
  };
}

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = nextRound => {
  currentRoundNumber++;
}
