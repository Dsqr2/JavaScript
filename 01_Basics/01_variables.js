const accountId = 144555;
let accountEmail = "darshan@gmail.com";
var accountPassword = "12345";
accountCity = "Indore";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// accountId = 12222; const values can not be modified they are fixed
accountEmail = "dj@gmail.com";
accountPassword = "98765";
accountCity = "Ujjain";

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

