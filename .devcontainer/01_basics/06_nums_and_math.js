const score = 300
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); //100

// console.log(balance.toString().length);  //3

// console.log(balance.toFixed(2));  //100.00

const num2 = 345.3445
// console.log(num2.toPrecision(4)); //345.3

const num3 = 20000000
// console.log(num3.toLocaleString()); //20,000,000
// console.log(num3.toLocaleString('en-IN')); //2,00,00,000


 
// +++++++++++MATHS +++++++++++++++++++++++

// console.log(Math); //Object[Math]} {}
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.min(3,4,5));


// console.log(Math.random()); //always b/w 0 and 1 random values
// console.log(Math.random()*10) + 1); //value will not be 0

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1)+ min)