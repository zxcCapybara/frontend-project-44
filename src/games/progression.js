import runGame from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);
