////////////////// TASK 1 ***************************
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому адресу.
  Обязательно обработать вариант с ошибкой запроса используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector('input');
// const form = document.querySelector('.search-form');
// const result = document.querySelector('.result');
// const API_URL = 'https://restcountries.eu/rest/v2/name/';

// const parseDate = date => {
//   console.log(date);
//   const str = `<p>Country name: ${date[0].name}</p>
//         <p>Capital: ${date[0].capital}</p>
//         <p>Main currency: ${date[0].currencies[0].code}</p>
//         <p>Flag: <img src="${date[0].flag}" width="30" heigth="30"></p>`;
//   result.innerHTML = str;
// };

// function fetchCountryData(evt) {
//   evt.preventDefault();

//   const value = input.value;
//   fetch(`${API_URL}${value}`)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('some error');
//     })
//     .then(date => parseDate(date))
//     .catch(console.log);
// }

// form.addEventListener('submit', fetchCountryData);

////////////////// TASK 2 ***************************
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://api.github.com/users/имя-пользователя

  Документация по Git API:
    https://developer.github.com/v3/

  С помощью fetch сделать запрос по составленому адресу.
  Обязательно обработать вариант с ошибкой запроса используя catch.

  Результат запроса вывести в поле result в формате:
    Avatar: аватартка
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев

  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector('input');
// const form = document.querySelector('.search-form');
// const result = document.querySelector('.result');
// const API_URL = 'https://api.github.com/users/';

// form.addEventListener('submit', fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// const fillTheTemplateWithData = user => {
//   const text = `<p>Avatar: <img src="${user.avatar_url}"></p>
//   <p>Username: ${user.login}</p>
//   <p>Bio: ${user.blog}</p>
//   <p>Public repos: ${user.public_repos}</p>`;

//   result.innerHTML = '';
//   result.innerHTML = text;
// };

// function fetchUserData(evt) {
//   evt.preventDefault();
//   const userName = input.value;

//   fetch(`${API_URL}${userName}`)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('some Error');
//     })
//     .then(date => {
//       fillTheTemplateWithData(date);
//     })
//     .catch(err => console.log(err));
// }

////////////////// TASK 3 ***************************
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.

  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.

    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector('.search-form');
// const userTable = document.querySelector('.user-table');

// form.addEventListener('submit', fetchUsers);

// const parseDate = user => {
//   const fillDate = `
// <tr>
//   <td>${user.name}</td>
//   <td>${user.email}</td>
//   <td>${user.address.city}</td>
//   <td>${user.website}</td>
//   <td>${user.company.name}</td>
// </tr>`;
//   return fillDate;
// };

// const innerResult = users => {
//   const result = users.map(user => parseDate(user)).join('');
//   console.log(result);
//   userTable.insertAdjacentHTML('beforeend', result);
//   // userTable.innerHTML = result;
// };

// function fetchUsers(evt) {
//   evt.preventDefault();
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       if (response.ok) return response.json();
//       console.log(response.json());
//       throw new Error('some wrong');
//     })
//     .then(date => innerResult(date))
//     .catch(err => console.log(err));
// }

////////////////// TASK 4 ***************************
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос
  на получение информации о пользоватеьте с id (число) введенным в input.
  Не забывайте что значение input это строка.

  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result

  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// form.addEventListener("submit", getUserById);

// const fillTheTemplateWithData = user => {
//   console.log(user)
//   const text = `<p>Name: ${user.name}</p>
//   <p>Userphone: ${user.phone}</p>
//   <p>Mail: ${user.email}</p>
//   <p>City: ${user.address.city}</p>`;

//   result.innerHTML = '';
//   result.innerHTML = text;
// };

// function getUserById(evt) {
//   evt.preventDefault();
//   const inputValue = input.value;
//   const userid = Number.isNaN(Number(inputValue))? alert("введите число"): Number(inputValue);

//   fetch(`https://jsonplaceholder.typicode.com/users/${userid}`).then(response => {
//     if(response.ok) return response.json();
//     throw new Error('some Wrong');
//   }).then(date => fillTheTemplateWithData(date)).catch(console.log)
// }
