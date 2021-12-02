let userName = '';
let userQuestion = 'do you want to use the Magic Eight Ball?';
let eightBall = '';
const randomNum = Math.floor(Math.random() * 8);

userName ? console.log(`Hello, ${userName}`) : console.log("Hello");
console.log(`The user asked: ${userQuestion}`);

switch (randomNum) {
case 0:
  eightBall = 'It is certain';
  break;
case 1:
  eightBall = 'It is decidedly so';
  break;
case 2:
  eightBall = 'Reply hazy try again';
  break;
case 3:
  eightBall = 'Cannot predict now';
  break;
case 4:
  eightBall = 'Do not count on it';
  break;
case 5:
  eightBall = 'My sources say no';
  break;
case 6:
  eightBall = 'Signs point to yes';
  break;
} 

console.log(`The Magic Eight Ball says: "${eightBall}"`);
