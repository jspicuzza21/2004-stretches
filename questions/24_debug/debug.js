//YOU WILL BE EDITING THIS CODE

class CoffeeShop {
  constructor() {
    this.pendingOrders = [];
    this.completedOrders = [];
    this.menu = ['mocha', 'latte', 'flat-white', 'drip', 'espresso'];
  }

  inputOrder(str) {
    this.pendingOrders.push(str);
    return this.pendingOrders;
  }

  makeCoffee() {
    const coffeeOrder=this.pendingOrders.shift();
    this.completedOrders.push(coffeeOrder);
    return this.completedOrders;
  }

  printMenu() {
    return this.menu;
  }
}

module.exports = { CoffeeShop };
