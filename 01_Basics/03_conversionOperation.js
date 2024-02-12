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

console.log(number);
console.log(stringNumber);