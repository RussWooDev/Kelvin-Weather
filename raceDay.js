let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false;
const runnerAge = 18;

if (runnerAge >= 18 && registerEarly === true) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && registerEarly === true) {
  console.log(`Runner ${raceNumber}, your race is at 9.30am`);
} else if (runnerAge > 18 && registerEarly !== true){
  console.log(`Runner ${raceNumber}, your race is at 11.30am`)
} else if (runnerAge <= 18) {
  console.log(`Runner ${raceNumber}, your race is at 12.30am`)
} else {
  console.log('Please see the registration desk');
}
