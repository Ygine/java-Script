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
    console.log(`Добрый день, вас обслуживает ${this.name}`);
    console.log(`Пробивает...`);
  },

  needPlasticBag() {
    const answertToTheBagQuestion = confirm('пакетик нужен?');
    if (answertToTheBagQuestion) {
      order.PlasticBag = 1;
    }
  },

  KasirPunchesGoods() {
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
    this.customerMoney = value;
    setTimeout(() => {
      console.log(`Вы мне дали ${this.customerMoney}грн`);
    }, 13000);
  },

  countTotalPrice(allProducts, order) {
    for (const value in order) {
      this.totalPrice += order[value] * allProducts[value];
    }
    setTimeout(() => {
      console.log(`С вас ${this.totalPrice}грн`);
    }, 10000);
  },

  countChange() {
    this.change = this.customerMoney - this.totalPrice;

    if (this.change > 0) {
      this.onSuccess();
    } else {
      this.lacksMoney = this.totalPrice - this.customerMoney;
      this.error = `Очень жаль, но вам не хватает ${
        this.lacksMoney
      }грн на покупки`;
      this.onError();
    }
  },

  onSuccess() {
    setTimeout(() => {
      console.log(`Ваша сдача ${this.change}грн, спасибо за покупку,`);
    }, 15000);
  },

  onError() {
    setTimeout(() => {
      console.log(this.error);
    }, 15000);
  },

  reset() {},
};

cashier.greet();

cashier.needPlasticBag();

cashier.KasirPunchesGoods();

cashier.countTotalPrice(products, order);

cashier.getCustomerMoney(330);

cashier.countChange();
