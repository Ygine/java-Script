'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';
const cancelUserMassege = 'Отменено пользователем!';
const wrongLoginMassege = 'Доступ запрещен, неверный логин!';
const wrongPasswordMassege = 'Доступ запрещен, неверный пароль!';
const welcome = 'Добро пожаловать!';

const enterLogin = prompt('Введите логин !');
if (enterLogin === adminLogin) {
  const enterPassword = prompt('Введите пароль !');
  if (enterPassword === adminPassword) {
    alert(welcome);
  } else if (enterPassword === null) {
    alert(cancelUserMassege);
  } else {
    alert(wrongPasswordMassege);
  }
} else if (enterLogin === null) {
  alert(cancelUserMassege);
} else {
  alert(wrongLoginMassege);
}

// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
// const groop = ['Sharm', 'Hurgada', 'Taba'];
// let placesInSharm = 15;
// let placesInHurgada = 25;
// let placesInTaba = 6;
// const errorMessege = 'ошибка ввода';
// const cancelMassege = 'Нам очень жаль, приходите еще!';
// const places = prompt('Введите число необходимых мест');

// if (!Number.isNaN(Number(places))) {
//   if (places % 1 !== 0 || places <= 0) {
//     alert(errorMessege);
//   } else if (places > 25) {
//     alert('Извините, столько мест нет ни в одной группе!');
//   } else if (places > placesInSharm) {
//     const placesMessege = confirm(
//       `есть место в группе HURGADA, согласны ли вы быть в этой группе?`,
//     );

//     if (placesMessege) {
//       alert(`Приятного путешествия в группе HURGADA`);
//       placesInHurgada = placesInHurgada - places;
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   } else if (places > placesInTaba) {
//     const placesMessege = confirm(
//       'есть место в группе Sharm , согласны ли вы быть в этой группе?',
//     );
//     if (placesMessege) {
//       alert(`Приятного путешествия в группе Sharm`);
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   } else {
//     const placesMessege = confirm(
//       'есть место в группе Taba, согласны ли вы быть в этой группе?',
//     );
//     if (placesMessege) {
//       alert(`Приятного путешествия в группе Taba`);
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   }
// } else if (places === null) {
//   alert(cancelMassege);
// } else {
//   alert(errorMessege);
// }
