const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error');
  };
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch(randomNum) {
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
   case 2: 
      return 'scissors';
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } 

  if (userChoice === 'bomb') {
    return 'You won!';
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

 if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
 if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('Computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
