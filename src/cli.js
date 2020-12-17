import readlineSync from  'readline-sync';

export const greeting = (name) => {
  const yourName = readlineSync.question('May I have your name?');
  return console.log(`Hello, ${yourName}!`);
};