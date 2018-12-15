'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let enterPassword;
do {
  enterPassword = prompt('введите пароль');

  if (enterPassword === null) {
    break;
  } else if (passwords.includes(enterPassword)) {
    alert('Добро пожаловать!');
    attempts = 0;
  } else {
    attempts -= 1;
    if (attempts === 0) {
      alert('Попыток нет - вход запрещен');
      break;
    }
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }
} while (attempts !== 0);
