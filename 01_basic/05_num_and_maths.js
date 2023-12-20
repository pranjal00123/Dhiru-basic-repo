let num = 200;

console.log(num);
console.log(typeof num);

let newNum = new Number(550);

console.log(newNum);
console.log(typeof newNum); // gives an object;


// round number
console.log(Math.round(123.5));

//random number
console.log(Math.random());




// rendom number between two numbers

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomNum(20, 30))
