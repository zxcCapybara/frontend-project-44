// src/games/gcd.js
import runGame from '../gameEngine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);