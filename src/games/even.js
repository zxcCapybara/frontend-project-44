import readlineSync from 'readline-sync';
import { greetUser } from '../cli.js';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при ошибке
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`); // Победа после 3 правильных ответов
};

export default playEvenGame;