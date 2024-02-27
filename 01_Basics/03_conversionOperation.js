let score = "33"

// const {score} = req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33Darshan" => NaN
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "Darshan" => true

let number = 33

let stringNumber = String(number);

// console.log(number);
// console.log(stringNumber);

// ****************************Operations******************************
let value = 3;
let negValue = -value;

console.log(value);
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // Power of 2 ^ 3 => 8
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log((3 + 4) * 5 % 3); 

console.log(+true);  // 1
console.log(10 + true);  // 11
console.log(+""); // 0 

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
--gameCounter;
console.log(gameCounter); //100
gameCounter--;
console.log(gameCounter); //100