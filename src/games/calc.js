import runGame from '../gameEngine.js';

const description = 'What is the result of the expression?';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Unknown operator');
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(50);
  const num2 = getRandomNumber(50);
  const operator = operators[getRandomNumber(operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);
