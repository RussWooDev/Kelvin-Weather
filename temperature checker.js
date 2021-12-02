//this sets the value of kelvin permanently
const kelvin = 0; 
 // sets celsius value
const celsius = kelvin - 273;
// sets fahrenheit value
let fahrenheit = celsius * (9/5) + 32; 
 // rounds fahrenheit value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
