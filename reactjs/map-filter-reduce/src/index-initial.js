var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// var doubleNumbers = numbers.map((x) => {
//   return x * 2;
// });
// console.log(doubleNumbers);
// OUTPUT: [6, 112, 4, 96, 10]

//Filter - Create a new array by keeping the items that return true.
// var lessThanTenNumbers = numbers.filter((x) => {
//   return x < 10;
// })
// console.log(lessThanTenNumbers);
// OUTPUT: [3, 2, 5]

//Reduce - Accumulate a value by doing something to each item in an array.

// var summedNumber = numbers.reduce((accumulator, currNumber) => {
//   console.log("accumulator: " + accumulator);
//   accumulator = accumulator + currNumber;
//   console.log("currentNumber: " + currNumber);
//   console.log(accumulator);
//   return accumulator;
// });

// OUTPUT: accumulator: 3
// currentNumber: 56
// 59
// accumulator: 59
// currentNumber: 2
// 61
// accumulator: 61
// currentNumber: 48
// 109
// accumulator: 109
// currentNumber: 5
// 114

//Find - find the first item that matches from an array.
// const newNumber = numbers.find((x) => {
//   return x > 10;
// });
// console.log(newNumber);
// OUTPUT: 56

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex((x) => {
  return x > 10;
});
console.log(index);
// OUTPUT: 1
