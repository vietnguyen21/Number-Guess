let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (user_guess,computer_guess,secret_target) => {
  let user = Math.abs(secret_target - user_guess);
  let pc = Math.abs(secret_target - computer_guess);
  if (user > pc) {
    return false;
  };
  if (pc > user) {
    return true;
  };
};

const updateScore = (para) => {
  if (para === 'human') {
    humanScore++
  };
  if (para === 'computer') {
    computerScore++
  };
};

const advanceRound = () => {
  currentRoundNumber++
};
