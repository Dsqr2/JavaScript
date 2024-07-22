//  Primitive Data Types

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Non Primitive (Reference) Data Types 

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

// Functions
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); // Data type of NULL is always object

// Documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3