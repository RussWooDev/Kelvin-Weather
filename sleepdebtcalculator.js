const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 8; 
    break;
    case 'Tuesday':
      return 5; 
        break;
    case 'Wednesday':
      return 6; 
        break;
    case 'Thursday':
      return 9; 
        break;
    case 'Friday':
      return 4; 
        break;
    case 'Saturday':
      return 9; 
        break;
    case 'Sunday':
      return 8; 
        break;
    default:
      console.log('re-enter day');
  }
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log("You have the perfect amount of sleep");
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You have ' + (actualSleepHours - idealSleepHours) + 'more sleep than you need');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You need ' + (idealSleepHours - actualSleepHours) + ' hours more of sleep!')
  } else {
    console.log('Error, please check your sleep input')
  }
}

 calculateSleepDebt();
