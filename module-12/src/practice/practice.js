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
const lightTheme = document.querySelector('button[data-theme="light"]');
const darkTheme = document.querySelector('button[data-theme="dark"]');
const redTheme = document.querySelector('button[data-theme="red"]');
const greenTheme = document.querySelector('button[data-theme="green"]');
const blueTheme = document.querySelector('button[data-theme="blue"]');
const body = document.body;
const lokalTheme = localStorage.getItem('theme');

switch (lokalTheme) {
  case null: {
    break;
  }
  case 'dark': {
    body.classList.add('theme-dark');
    break;
  }
  case 'light': {
    body.classList.add('theme-light');
    break;
  }
  case 'red': {
    body.classList.add('theme-red');
    break;
  }
  case 'green': {
    body.classList.add('theme-green');
    break;
  }
  case 'blue': {
    body.classList.add('theme-blue');
    break;
  }
}

const changeTheme = (localName, themName, setClass) => {
  localStorage.setItem(`${localName}`, `${themName}`);
  body.setAttribute('class', '');
  body.classList.add(`${setClass}`);
};

const setTheme = (elemSetListener, localName, setClass, themeName) => {
  elemSetListener.addEventListener('click', () => {
    changeTheme(localName, themeName, setClass);
  });
};

setTheme(lightTheme, 'theme', 'theme-light', 'light');
setTheme(darkTheme, 'theme', 'theme-dark', 'dark');
setTheme(redTheme, 'theme', 'theme-red', 'red');
setTheme(greenTheme, 'theme', 'theme-green', 'green');
setTheme(blueTheme, 'theme', 'theme-blue', 'blue');

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

////////////// TASK 3 ///////////////////
