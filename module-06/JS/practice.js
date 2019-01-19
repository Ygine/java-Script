/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function(login, email, friendsCount) {
//   this.email = email;
//   this.login = login;
//   this.friendsCount = friendsCount;
// };

// Account.prototype.getAccountInfo = function() {
//   console.log(`${this.login} - ${this.email} - ${this.friendsCount}`);
// };

// const user = new Account('Ygine', '@some.com', 4);
// const user1 = new Account('Ygine1', '@some1.com', 5);
// const user2 = new Account('Ygine2', '@some2.com', 6);

// user.getAccountInfo();
// user1.getAccountInfo();
// user2.getAccountInfo();

// TASK 2
/*
  Напишите ES6 класс StringBuilder.

  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.

  Добавьте классу следующие методы:

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     console.log(this.value);
//   }
//   append(str) {
//     this.value += str;
//   }
//   prepend(str) {
//     this.value = str + this.value;
//   }
//   pad(str) {
//     this.value = str + this.value + str;
//   }
// }

// const stringBuilder = new StringBuilder('.');

// stringBuilder.append('^');
// stringBuilder.getValue(); // '.^'

// stringBuilder.prepend('^');
// stringBuilder.getValue(); // '^.^'

// stringBuilder.pad('=');
// stringBuilder.getValue(); // '=^.^='

// TASK 3
class Car {
  constructor(maxSpeed, value) {
    this._value = value;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }
  get value() {
    return this._value;
  }
  set value(newPrise) {
    this._value = newPrise;
  }
  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if (spd < this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    if (spd < this.maxSpeed && spd > 0) {
      this.speed = spd;
    }
  }

  drive(hours) {
    if (this.running) {
      this.distance = hours * this.speed;
    }
  }
  static getSpecs(cars) {
    console.log(
      `maxSpeed - ${cars.maxSpeed}, running - ${cars.running}, distance - ${
        cars.distance
      }`,
    );
  }
}
const jaguar = new Car(330, 43000);

jaguar.turnOn();
// jaguar.turnOff();
jaguar.accelerate(100);
jaguar.decelerate(123);
jaguar.drive(123);

console.log(jaguar.value);
jaguar.value = 55000;
console.log(jaguar.value);

Car.getSpecs(jaguar);
