'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length < 4 || login.length > 16) return false;
  return true;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) return false;
  return true;
};

const addLogin = function(allLogins, login) {
  let valLoginMassege = 'Ошибка! Логин должен быть от 4 до 16 символов';
  let loginUniqueMessege = 'Такой логин уже используется!';

  if (isLoginValid(login) === false) return console.log(valLoginMassege);
  if (isLoginUnique(allLogins, login) === false) {
    return console.log(loginUniqueMessege);
  } else {
    allLogins.push(login);
  }

  console.log('Логин успешно добавлен');
};

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');
