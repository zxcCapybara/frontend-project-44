import runGame from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(2, 100);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);
