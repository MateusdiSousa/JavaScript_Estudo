let num1 = 0.1;
let num2 = 0.9;

num1 += num2
num1 += num2
num1 += 0.1


num1 = Number(num1.toFixed(2))
console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString()+ num2.toString())
//num1 = num1.toString();
//console.log(num1.toString(2));
//console.log(num2.toFixed(2));

//console.log(Number.isInteger(num1))
// let temp = num1 * "ala";
//console.log(Number.isNaN(temp))