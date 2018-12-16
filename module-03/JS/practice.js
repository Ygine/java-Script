'use strict';

//TASK 1

// function checkNumberType(num) {
//   if (num % 2 === 0) return 'even';
//   else return 'odd';
// }
// console.log(checkNumberType(2));
// console.log(checkNumberType(46));
// console.log(checkNumberType(3));
// console.log(checkNumberType(17));

//TASK 2

// function formatString(str) {
//   let arrStr = str.split('');
//   if (arrStr.length <= 40) {
//     return arrStr.join('');
//   } else {
//     arrStr.length = 40;
//     arrStr = arrStr.join('') + '...';
//   }
//   return arrStr;
// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );

//TASK 3

// const checkForSpam = function(str) {
//   let lowerstr = str.toLowerCase();
//   if (lowerstr.includes('spam') || lowerstr.includes('sale')) return true;
//   return false;
// };
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

//TASK 4

// const getPx = str => {
//   if (typeof str === 'string') {
//     let number = Number.parseFloat(str);
//     return number;
//   }
//   return null;
// };
// console.log(getPx('10px') === 10);
// console.log(getPx('10.5') === 10.5);
// console.log(getPx('0') === 0);
// console.log(getPx(-1));
// console.log(getPx(10));

//TASK 5

// const findLongestWord = function(str) {
//   let arr = str.split(' ');
//   let longWord = '';
//   for (const value of arr) {
//     if (value.length > longWord.length) {
//       longWord = value;
//     }
//   }
//   return longWord;
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//TASK 6

// const findLargestNumber = arr => {
//   let bigNumber = 0;
//   for (const elem of arr) {
//     if (elem > bigNumber) {
//       bigNumber = elem;
//     }
//   }
//   return bigNumber;
// };
// console.log(findLargestNumber([1, 2, 3]));
// console.log(findLargestNumber([27, 12, 18, 5]));
// console.log(findLargestNumber([31, 128, 14, 74]));

//TASK 7
// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = function() {
//   for (let i = 0; i < arguments.length; i += 1) {
//     if (uniqueNumbers.includes(arguments[i]) === false) {
//       uniqueNumbers.push(arguments[i]);
//     }
//   }
// };

// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers);

// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers);

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers);

//TASK 8

//const removeFromArray = function(arr, ...arg) {
//1 вариант
// const newArr = [];
// const newArg = Array.from(arguments);
// for (let i = 0; i < arr.length; i += 1) {
//   if (newArg.includes(arr[i]) === false) {
//     newArr.push(arr[i]);
//   }
// }
// return newArr;

//2 вариант
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr.includes(arg[i])) {
//     arr.splice(arr.indexOf(arg[i]), 1);
//   }
// }
// return arr;

//3 вариант
//   for (let i = 0; i < arg.length; i += 1) {
//     for (let k = 0; k < arr.length; k += 1) {
//       if (arg[i] === arr[k]) {
//         arr.splice(k, 1);
//       }
//     }
//   }
//   return arr;
// };

// console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4));
// console.log(removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4));

