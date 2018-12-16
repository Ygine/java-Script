'use strict';

const obj = {
  name: 'Ygi',
  age: 23,
  isAdmin: false,
};

const objArr = Object.keys(obj);
console.log(objArr);

const objValue = Object.values(obj);
for (const key of objValue) {
  console.log(key);
}

for (const key of objArr) {
  console.log(key);
}
