////////////// TASK 1 ///////////////////

/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
 */
// const lightTheme = document.querySelector('button[data-theme="light"]');
// const darkTheme = document.querySelector('button[data-theme="dark"]');
// const redTheme = document.querySelector('button[data-theme="red"]');
// const greenTheme = document.querySelector('button[data-theme="green"]');
// const blueTheme = document.querySelector('button[data-theme="blue"]');
// const body = document.body;
// const lokalTheme = localStorage.getItem('theme');

// switch (lokalTheme) {
//   case null: {
//     break;
//   }
//   case 'dark': {
//     body.classList.add('theme-dark');
//     break;
//   }
//   case 'light': {
//     body.classList.add('theme-light');
//     break;
//   }
//   case 'red': {
//     body.classList.add('theme-red');
//     break;
//   }
//   case 'green': {
//     body.classList.add('theme-green');
//     break;
//   }
//   case 'blue': {
//     body.classList.add('theme-blue');
//     break;
//   }
// }

// const changeTheme = (localName, themName, setClass) => {
//   localStorage.setItem(`${localName}`, `${themName}`);
//   body.setAttribute('class', '');
//   body.classList.add(`${setClass}`);
// };

// const setTheme = (elemSetListener, localName, setClass, themeName) => {
//   elemSetListener.addEventListener('click', () => {
//     changeTheme(localName, themeName, setClass);
//   });
// };

// setTheme(lightTheme, 'theme', 'theme-light', 'light');
// setTheme(darkTheme, 'theme', 'theme-dark', 'dark');
// setTheme(redTheme, 'theme', 'theme-red', 'red');
// setTheme(greenTheme, 'theme', 'theme-green', 'green');
// setTheme(blueTheme, 'theme', 'theme-blue', 'blue');

////////////// TASK 2 ///////////////////
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
//   '#000000',
// ];

// const body = document.body;
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// let timerId;
// let isActive = false;

// start.addEventListener('click', () => {
//   if (isActive) return;

//   isActive = true;
//   timerId = setInterval(() => {
//     body.style.backgroundColor = `${
//       colors[Math.floor(Math.random() * colors.length)]
//     }`;
//   }, 1000);
// });

// stop.addEventListener('click', () => {
//   clearInterval(timerId);
//   isActive = false;
// });

////////////// TASK time ///////////////////
// const date1 = document.querySelector('.date');
// const time1 = document.querySelector('.time');
// const clock = document.querySelector('#clock');

// const clock1 = {
//   el: clock,
//   data: {
//     time: time1,
//     date: date1,
//   },
// };

// var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// var timerID = setInterval(updateTime, 1000);

// updateTime();

// function updateTime() {
//   var cd = new Date();
//   clock1.data.time.textContent =
//     zeroPadding(cd.getHours(), 2) +
//     ':' +
//     zeroPadding(cd.getMinutes(), 2) +
//     ':' +
//     zeroPadding(cd.getSeconds(), 2);
//   clock1.data.date.textContent =
//     zeroPadding(cd.getFullYear(), 4) +
//     '-' +
//     zeroPadding(cd.getMonth() + 1, 2) +
//     '-' +
//     zeroPadding(cd.getDate(), 2) +
//     ' ' +
//     week[cd.getDay()];
// }

// function zeroPadding(num, digit) {
//   var zero = '';
//   for (var i = 0; i < digit; i++) {
//     zero += '0';
//   }
//   return (zero + num).slice(-digit);
// }

////////////// TASK 3 ///////////////////

/*
 * Напиши функцию delay(ms), которая возвращает промис,
 * переходящий в состояние "resolved" через ms миллисекунд.
 *
 * Значением исполнившегося промиса должно быть то кол-во
 * миллисекунд которое передали во время вызова функции delay.
 */

// const delay = (ms) =>{
//   const promise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//       resolve(ms);
//     }, ms);
//   });

//   return promise;
// }

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

////////////// TASK 4 ///////////////////
/*
 * Перепиши функцию updateActiveState так, чтобы она
 * не использовала callback-функцию, а возвращала промис.
 */

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const updateActiveState = users => {
//   return new Promise((resolve, reject) => {
//     const updatedUsers = users.map(user => ({ ...user, active: !user.active }));
//     resolve(updatedUsers);
//     // reject('ERRORRRR!!!!');
//   });
// };

// updateActiveState(users, console.table);

// updateActiveState(users).then(console.log);
// .catch(console.log());

////////////// TASK 5 ///////////////////

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

// const processOrder = value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!Number(value)) reject(' Некорректный ввод!');

//       quantity < value
//         ? reject('К сожалению на складе не достаточно товаров!')
//         : resolve('Ваш заказ готов!');
//     }, 500);
//   });
// };

// const DELAY = 1000;
// const quantity = 100;

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder('lorem')
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!
