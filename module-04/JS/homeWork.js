'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
  PlasticBag: 15,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 4,
};

const cashier = {
  name: 'Иванна',
  customerMoney: 0,
  totalPrice: 0,
  change: 0,
  error: null,
  lacksMoney: 0,

  greet() {
    alert(`Добрый день, вас обслуживает ${cashier.name}`);
  },

  needPlasticBag() {
    const answertToTheBagQuestion = confirm('пакетик нужен?');
    if (answertToTheBagQuestion) {
      order.PlasticBag = 1;
    }
  },

  KasirPunchesGoods() {
    console.log(`Пробивает...`);
    const products = Object.keys(order);
    let b = 1500;
    products.map(elem =>
      setTimeout(
        () => console.log(`Пик...  ${elem} - ${order[elem]} шт.`),
        (b += 1500),
      ),
    );
  },

  getCustomerMoney(value) {
    cashier.customerMoney = value;
    setTimeout(() => {
      console.log(`Вы мне дали ${cashier.customerMoney}грн`);
    }, 13000);
  },

  countTotalPrice(allProducts, order) {
    for (const value in order) {
      cashier.totalPrice += order[value] * allProducts[value];
    }
    setTimeout(() => {
      console.log(`С вас ${cashier.totalPrice}грн`);
    }, 11000);
  },

  countChange() {
    if (cashier.customerMoney < cashier.totalPrice) {
      cashier.lacksMoney = cashier.totalPrice - cashier.customerMoney;
      cashier.error = `Очень жаль, но вам не хватает ${
        cashier.lacksMoney
      }грн на покупки`;
    }

    if (cashier.error === null) {
      cashier.change = cashier.customerMoney - cashier.totalPrice;
      cashier.onSuccess();
    } else {
      cashier.onError();
    }
  },

  onSuccess() {
    setTimeout(() => {
      console.log(`Ваша сдача ${cashier.change}грн, спасибо за покупку,`);
    }, 15000);
  },

  onError() {
    setTimeout(() => {
      console.log(cashier.error);
    }, 15000);
  },

  reset() {},
};

cashier.greet();

cashier.needPlasticBag();

cashier.KasirPunchesGoods();

cashier.countTotalPrice(products, order);

cashier.getCustomerMoney(300);

cashier.countChange();
