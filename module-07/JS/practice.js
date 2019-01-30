'use strict';
//////////// TASK 1  /////////////////

// 1 // const findGreaterThan = (num, arr) => {
//   return arr.filter(elem => elem > num);
// };
// console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
// console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
// console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

/// 2 // const multiplyBy = (num, arr) => {
//   return arr.map(elem => elem * num);
// };
// console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
// console.log(multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]

// 3 // function summAllNumbers(...args) {
//   return args.reduce((num, elem) => num + elem, 0);
// }
// console.log(summAllNumbers(1, 2, 3)); // 6
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

/* 4 Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
// const findEvery = (num, arr) => {
//   return arr.every(elem => (elem < num ? false : true));
// };

// console.log(findEvery(5, [5, 6, 7, 8, 9])); // true
// console.log(findEvery(6, [6, 6, 3, 8, 9])); // false
// console.log(findEvery(4, [5, 6, 7, 8, 9])); // true

///////////// TASK 2 ///////////////////////

/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.
  Функция должна возвращать массив всех значений этого ключа из arr.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const getPropValues = (arr, prop) => {
//   return arr.map(obj => obj[prop]);
// };

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// // Вызовы функции для проверки
// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]
// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]

///////////// TASK 3 ///////////////////////
/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const setGuestState = (guests, period) => {
//   return guests.map(user => {
//     if (user.inactiveDays < period) {
//       return { ...user, isActive: true };
//     }
//     return { ...user, isActive: false };
//   });
// };

// const users = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true },
// ];

// Вызовы функции для проверки
// console.log(setGuestState(users, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
// console.log(setGuestState(users, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
// console.log(setGuestState(users, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

///////////// TASK 4 ///////////////////////

/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const getActiveGuests = guests =>
//   guests.filter(guest => guest.isActive === true);

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

///////////// TASK 5 ///////////////////////

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const getGuestsOlderThan = (guests, age) =>
//   guests.filter(guest => guest.age > age);

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
// console.log(getGuestsOlderThan(guests, 55)); // []

///////////// TASK 6 ///////////////////////

/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const getGuestById = (guests, id) => guests.find(guest => guest.id === id);
// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 },
// ];

// // Вызовы функции для проверки
// console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}
// console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}
// console.log(getGuestById(guests, 5)); // undefined

///////////// TASK 7 ///////////////////////
/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
// */
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40,
// };

// console.log(Object.values(order).reduce((sum, elem) => sum + elem, 0)); // 150

///////////// TASK 8 ///////////////////////
/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40,
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1,
//   chicken1: 1,
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3,
// };

// const getTotalPrice = (products, order) => {
//   const sum = Object.keys(order).reduce((acc, product) => {
//     if (products.hasOwnProperty(product)) {
//       return acc + order[product] * products[product];
//     }
//     return acc;
//   }, 0);

//   return sum;
// };

// console.log(getTotalPrice(products, orderA));

// console.log(getTotalPrice(products, orderB));

///////////// TASK 8 ///////////////////////

/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const guestsB = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: true },
//   { name: 'Ajax', isActive: true },
// ];

// const allGuestsActive = guests =>
//   guests.every(guest => guest.isActive === true);

// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true
