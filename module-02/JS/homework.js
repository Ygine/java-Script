'use strict';
const numbers = [];
let userInput;
let total = 0;

do {
  userInput = prompt('введите число');

  if (userInput === null) break;

  userInput = Number(userInput);
  if (!Number.isNaN(userInput)) {
    numbers.push(userInput);
  } else {
    alert('Вы ыыели не число, попробуйте еще раз!!');
  }
} while (true);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

if (numbers.length !== 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
