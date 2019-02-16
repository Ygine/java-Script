'use strict';

// const addButtonListener = document.querySelector('.add-btn');
// const removeButtonListener = document.querySelector('.rem-btn');
// const clickButton = document.querySelector('.btn');

// const hendlerButtunClick = function() {
//   console.log('HELLO! YOU CLICK ME ??? !!!!!!!');
// };

// addButtonListener.addEventListener('click', () => {
//   clickButton.addEventListener('click', hendlerButtunClick);
// });

// removeButtonListener.addEventListener('click', () => {
//   clickButton.removeEventListener('click', hendlerButtunClick);
// });

// const user = {
//   fullname: 'ygine',
//   showname() {
//     console.log(this.fullname);
//   },
// };

// const mainForm = document.querySelector('.main-form');
// const formInput = document.querySelector('.form-input');

// const hendlerShowName = function(event) {
//   event.preventDefault();
//   console.log(formInput.value);
//   console.log(event.target.elements[1]);
// };

// mainForm.addEventListener('submit', hendlerShowName);
// window.addEventListener(' beforeunload', hendlerShowName2);
// formInput.addEventListener('blur', hendlerShowName2);

// ///////// TASK 1 //////////////////
/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let current = 0;
// const button = document.querySelector('.button');

// const hendelChangeTextButton = function() {
//   current += 1;
//   button.textContent = current;
// };

// button.addEventListener('click', hendelChangeTextButton);

// /////////////// TASK 2 /////////////////

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const refs = {
//   addButton: document.querySelector("button[data-action='add']"),
//   result: document.querySelector('.result'),
//   expression: document.querySelector('.expression'),
// };

// const showMySum = function() {
//   const result = refs.result;
//   const exp = refs.expression;
//   const inputOne = Number(exp.children[0].value);
//   const inputTwo = Number(exp.children[2].value);

//   const sum = inputOne + inputTwo;
//   if (Number.isNaN(sum)) return alert('введите корректны данные');

//   result.textContent = sum;
// };

// refs.addButton.addEventListener('click', showMySum);

// /////////////// TASK 3 /////////////////
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1.

  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/

// СПОСОБ 1

// class Counter {
//   constructor(value = 0) {
//     this._value = value;
//   }

//   increment(collback) {
//     this._value += 1;
//     collback(this._value);
//   }

//   decrement(collback) {
//     this._value -= 1;
//     collback(this._value);
//   }
// }

// const refs = {
//   decrenentButton: document.querySelector('[data-action="sub"]'),
//   incrementButton: document.querySelector('[data-action="add"]'),
//   spanValue: document.querySelector('.value'),
// };

// const onChange = value => {
//   refs.spanValue.textContent = value;
// };

// const count = new Counter();

// refs.decrenentButton.addEventListener('click', () => {
//   count.decrement(onChange);
//   // count.decrement.bind(count, onChange);
// });

// refs.incrementButton.addEventListener('click', () => {
//   count.increment(onChange);
//   //count.decrement.bind(count, onChange);
// });

// СПОСОБ 2

// class Counter {
//   constructor(value = 0) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   increment() {
//     this._value += 1;
//     return this._value;
//   }

//   decrement() {
//     this._value -= 1;
//     return this._value;
//   }
// }

// const refs = {
//   decrenentButton: document.querySelector('[data-action="sub"]'),
//   incrementButton: document.querySelector('[data-action="add"]'),
//   spanValue: document.querySelector('.value'),
// };

// const onChange = value => {
//   refs.spanValue.textContent = value;
// };

// const count = new Counter(5);

// onChange(count.value);

// refs.decrenentButton.addEventListener('click', () => {
//   const value = count.decrement();
//   onChange(value);
// });

// refs.incrementButton.addEventListener('click', () => {
//   const value = count.increment();
//   onChange(value);
// });

// /////////////// TASK 4 /////////////////

// const refs = {
//   forma: document.querySelector('.question-form'),
//   result: document.querySelector('.result'),
//   inputOptions: document.querySelector('.options'),
// };

// const hendleShowResult = e => {
//   e.preventDefault();

//   const child = [...e.target.elements];
//   const inputChecked = child.find(element => {
//     return element.checked;
//   });

//   if (inputChecked) {
//     refs.result.textContent += ` ${inputChecked.value}`;
//   } else {
//     alert('віберите категорию');
//   }
// };

// refs.forma.addEventListener('submit', hendleShowResult);

// /////////////// TASK 5 /////////////////

// const images = document.querySelector('.images');

// const hendleShowSrcImage = e => {
//   if (e.target.nodeName !== 'IMG') return;
//   alert(e.target.src);
// };

// images.addEventListener('click', hendleShowSrcImage);

// /////////////// TASK 6 /////////////////

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const refs = {
//   list: document.querySelector('.list'),
//   deleteButton: document.querySelector('button[data-action="delete"]'),
// };

// const hendlDeleteItem = e => {
//   if (e.target.nodeName !== 'BUTTON') return;
//   const item = e.target.closest('li');

//   item.remove();
// };

// refs.list.addEventListener('click', hendlDeleteItem);

// /////////////// TASK 7 /////////////////

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const refs = {
//   inputList: document.querySelector('.input-list'),
// };

// const hendleValid = e => {
//   const input = e.target;
//   const inputDataLength = Number(input.getAttribute('data-length'));
//   if (inputDataLength !== input.value.length) {
//     input.classList.add('invalid');
//   } else {
//     input.classList.add('valid');
//   }
// };

// const hendleCheckValid = e => {
//   if (e.target.nodeName !== 'INPUT') return;
//   e.target.addEventListener('change', hendleValid);
// };

// refs.inputList.addEventListener('click', hendleCheckValid);

// /////////////// TASK 8 /////////////////

/*
  Напишите скрипт который:

    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно
      отображаться в p.input-value
*/
// const tagInput = document.querySelector('.input');
// const messege = document.querySelector('.message');
// const inputValue = document.querySelector('.input-value');

// const handleInput = e => {
//   const input = e.target;
//   messege.textContent = 'Input is in focus!';

//   input.addEventListener('input', handleInputValue);
// };

// const handleInputValue = e => {
//   const input = e.target;
//   inputValue.textContent = 'Current input value:' + input.value;
// };

// tagInput.addEventListener('focus', handleInput);

// /////////////// TASK 9 /////////////////

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal,
    должно появляться. Для этого необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
{
  const refs = {
    backdrop: document.querySelector('.js-modal-backdrop'),
    openModalButton: document.querySelector('[data-action="open-modal"]'),
    closeModalButton: document.querySelector('[data-action="close-modal"]'),
    body: document.body,
  };

  const OpenModal = e => {
    refs.backdrop.classList.toggle('modal-hidden');
    window.addEventListener('keydown', hendleKeyPress);
  };

  const CloseModal = e => {
    refs.backdrop.classList.toggle('modal-hidden');
    window.removeEventListener('keydown', hendleKeyPress);
  };

  const hendleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    CloseModal();
  };

  const hendleBackdropClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    refs.backdrop.classList.toggle('modal-hidden');
  };

  refs.openModalButton.addEventListener('click', OpenModal);
  refs.closeModalButton.addEventListener('click', CloseModal);
  refs.backdrop.addEventListener('click', hendleBackdropClick);
}
// /////////////// TASK 10 /////////////////

/*
  Ознакомьтесь с HTML и CSS.

  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.

  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.

  При клике по ссылкам не должна перезагружаться страница!
*/
const refs = {
  menu: document.querySelector('.js-menu'),
  menuItem: document.querySelector('.menu-item'),
  menuLink: document.querySelectorAll('.menu-link'),
};

const hendleСhooseActiveLink = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'A') return;

  setActiveLink(e.target);
};

const setActiveLink = function(link) {
  const currentActiveLink = refs.menu.querySelector('a.active');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active');
  }

  link.classList.add('active');
};

refs.menu.addEventListener('click', hendleСhooseActiveLink);
