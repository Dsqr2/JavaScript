// console.log(2 > 0); //True
// console.log(2 >= 0); //True
// console.log(2 != 0); // True
// console.log(2 < 0); // False
// console.log(2 == 0); // False


// console.log("2" > 0); //True
// console.log("2" > "0"); //True
// console.log(2 > "0"); //True

console.log(null > 0); //False
console.log(null == 0); //False
console.log(null >= 0); //True

// Explaination

/* 

null > 0: In JavaScript, when comparing null with a number using the greater than (>) operator, 
          null is treated as 0. So, null is not greater than 0, hence the result is false.

null == 0: The equality operator (==) in JavaScript performs type coercion, and null is loosely 
           equal to undefined and 0. However, null is not strictly equal to 0, so the result is false.

null >= 0: Similar to the first comparison, null is treated as 0 when using the greater than 
           or equal to (>=) operator. Since 0 is equal to 0, the result is true.

*/

console.log(undefined == 0); //False
console.log(undefined > 0); //False
console.log(undefined < 0); //False

// ===

console.log("2" === 2); //False
