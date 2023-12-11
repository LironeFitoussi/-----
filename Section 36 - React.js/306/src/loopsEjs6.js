
//* var numbers = [3, 56, 2, 48, 5];

//! Basic
//? function square(x) {
//?   return x * x;
//? };
//? const newNumbers = numbers.map(function)

//! Anonymus
//? const newNumbers = numbers.map(function (x) {
//?   return x * x;
//? });

//! Arrow
//? const newNumbers = numbers.map((x) => {
//?   return x * x;
//? });

//! Arrow only return
//? const newNumbers = numbers.map((x) => x * x);

//? console.log(newNumbers);

//! Map -Create a new array by doing something with each item in an array.
//? const newNumbersMap = numbers.map((x) => x * 2);

//! Filter - Create a new array by keeping the items that return true.
//? const newNumbersFilter = numbers.filter((num) => num < 10);

//! Reduce - Accumulate a value by doing something to each item in an array.
//? var newNumberReduce = numbers.reduce(
//?   (accumulator, currentNumber) => accumulator + currentNumber
//? );

//!Find - find the first item that matches from an array.
//? const newNumberFind = numbers.find((num) => num > 10);

//!FindIndex - find the index of the first item that matches.
//? const newNumberFindIndex = numbers.findIndex((num) => num > 10);
