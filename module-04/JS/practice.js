//TASK 1
/* Напишите скрипт, который, для объекта user, последовательно:
    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - удаляет свойство premium
    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of */
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// console.log(user.mood);
// user.mood = 'javascript';
// console.log(user.mood);
// delete user.premium;
// console.log(user);

// for (const val in user) {
//   console.log(`ключ: ${val}, значение: ${user[val]}`);
// }

// console.log(`--------------------------------------`);

// const objKeys = Object.keys(user);
// for (const value of objKeys) {
//   console.log(`ключ: ${value}, значение: ${user[value]}`);
// }

// console.log(`--------------------------------------`);

// const objEntries = Object.entries(user);
// console.log(objEntries);
// for (const value of objEntries) {
//   const key = value[0];
//   const keyVal = value[1];
//   console.log(`ключ: ${key}, значение: ${keyVal}`);
// }

//TASK 2
/*Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач" */
// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   davider: 353,
//   helen: 1,
//   lorence: 99,

//   showHoMoreTasksComplete() {
//     let taskSumm = 0;
//     let menName;
//     for (const value in tasksCompleted) {
//       if (tasksCompleted[value] > taskSumm) {
//         taskSumm = tasksCompleted[value];
//         menName = value;
//       }
//     }
//     return menName;
//   },
// };

// console.log(tasksCompleted.showHoMoreTasksComplete());

//TASK 3
/*Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств. */
// Вызовы функции для проверки
// const countProps = obj => {
//   let summKeys = 0;
//   for (const key in obj) {
//     summKeys += 1;
//   }
//   return summKeys;
// };

// console.log(countProps({ key: undefined })); // 0
// console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3

//TASK 4
/* Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  Возвращает true если объект пустой, false если не пустой. */

// const isObjectEmpty = function(obj) {
//   // if (Object.keys(obj).length == 0) {
//   //   return true;
//   // }
//   // return false;

//   //////////////////////////////
// //   for (const key in obj) {
// //     if (obj.hasOwnProperty(key)) {
// //       return false;
// //     }
// //   }
// //   return true;
// // };
// // Вызовы функции для проверки

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ a: 1 })); // false
// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// TASK 5
/*Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  Функция возвращает общую сумму зарплаты. */

// const countTotalSalary = function(salaries) {
//   let total = 0;

//   for (const value in salaries) {
//     total += salaries[value];
//   }
//   return total;
// };
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// TASK 6
/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful' },
//   { name: 'Ajax', age: 3, mood: 'tired' },
// ];

// const getAllPropValues = (arr, prop) => {
//   const newArr = [];

//   for (const obj of arr) {
//     if (obj.hasOwnProperty(prop)) {
//       newArr.push(obj[prop]);
//     }
//   }
//   return newArr;
// };
// // Вызовы функции для проверки
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, 'active')); // []
