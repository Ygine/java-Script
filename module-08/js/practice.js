'use strict';

//////////////////// TASK 1 /////////////////////////
/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const listCildren = [...document.querySelector('.categories').children];
// listCildren.forEach(item =>
//   console.log(
//     `категория : ${item.firstChild.textContent} Количество вложенных li: ${
//       item.firstElementChild.children.length
//     }`,
//   ),
// );

//////////////////// TASK 2 /////////////////////////

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const List = document.querySelector('.list');
// List.firstElementChild.style.color = 'red';
// List.lastElementChild.style.color = 'blue';

//////////////////// TASK 3 /////////////////////////

/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const result = function(parent, text) {
//   text.forEach(elem => {
//     parent.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
//   });
// };

// result(list, elements);

//////////////////// TASK 4 /////////////////////////
/*
  Напишите скрипт для создания галлереи изображений.

  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Two Brown Hen and One Red Rooster',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Macaw Birds',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: '2 Lion on Grass Field during Daytime',
//   },
// ];

// const gallery = document.querySelector('.gallery');
// gallery.style.listStyle = 'none';

// const createListItem = function({ url, alt }) {
//   const li = document.createElement('li');
//   const img = document.createElement('img');

//   img.src = url;
//   img.setAttribute('alt', alt);
//   img.style.width = '300px';
//   li.appendChild(img);

//   return li;
// };

// const itemRelif = function(galleryItems, tag) {
//   const listItems = galleryItems.map(item => createListItem(item));
//   tag.append(...listItems);
// };

// itemRelif(galleryItems, gallery);

//////////////////// TASK 5 /////////////////////////

/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.

  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.

  Возвращает массив значений атрибута value.
*/
// const inputs = [...document.querySelectorAll('input[checked]')];

// const collectInputData = function(inputs) {
//   return inputs.map(item => item.value);
// };

// console.log(collectInputData(inputs));

//////////////////// TASK 6 /////////////////////////

/*
  Создайте функцию createMovieCard(), которая
  создает и возвращает DOM-узел карточки кинофильма.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// const createMovieCard = function() {
//   const container = document.createElement('div');
//   container.classList.add('movie');

//   const image = document.createElement('img');
//   image.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//   image.setAttribute('alt', 'movie image');
//   image.classList.add('movie__image');

//   const movieBody = document.createElement('div');
//   movieBody.classList.add('movie__body');

//   const movieTitle = document.createElement('h2');
//   movieTitle.classList.add('movie__title');
//   movieTitle.textContent = 'The Godfather';

//   const par = document.createElement('p');
//   par.classList.add('movie__description');
//   par.textContent = `Spanning the years 1945 to 1955, a chronicle of the
//     Italian-American Corleone crime family. When organized crime family
//     patriarch, Vito Corleone barely survives an attempt on his life, his
//     youngest son, Michael steps in to take care of the would-be killers,
//     launching a campaign of bloody revenge.`;

//   const movieDate = document.createElement('p');
//   movieDate.classList.add('movie__date');
//   movieDate.textContent = 'Released: 1972-03-14';

//   const movieRating = document.createElement('p');
//   movieRating.classList.add('movie__rating');
//   movieRating.textContent = 'Rating: 8.6';

//   container.append(image, movieBody);
//   movieBody.append(movieTitle, par, movieDate, movieRating);

//   return container;
// };

// const myBody = document.body;
// myBody.appendChild(createMovieCard());

//////////////////// TASK 7 /////////////////////////

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const root = document.querySelector('#root');

const rgbaColor = function(alpha) {
  const getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);
  const alphaCanal = alpha;
  const color = `rgba(${red}, ${green}, ${blue}, ${alphaCanal})`;

  return color;
};

const createBoxes = function(num) {
  let box = [];
  let size = 30;

  const createDiv = function() {
    const boxDiv = document.createElement('div');
    boxDiv.style.width = size + 'px';
    boxDiv.style.height = size + 'px';
    boxDiv.style.backgroundColor = rgbaColor(0.7);
    boxDiv.style.margin = '5px';
    size += 10;
    return boxDiv;
  };

  for (let i = 0; i < num; i += 1) {
    box.push(createDiv());
  }

  return box;
};

root.append(...createBoxes(5));
